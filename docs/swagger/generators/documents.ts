import type { SchemaDescriptor } from '../schemas/types'
import {
  baseSpec, documentProperties, mandatoryFieldNames, realmHeaderParameter,
  realmQueryParameter, standardErrorResponses, uidParameter
} from './base'

// Endpoint generators for the shared documents API. Create/update use the
// v2023 single-call publishing endpoint (ADR 0002); get/delete/list stay on
// their v2013 endpoints. The same endpoints serve every app and record type;
// the schema descriptor and the realm give each spec its identity.

export interface DocumentSpecOptions {
  apiUrl: string
  realm: string
  schema: SchemaDescriptor
}

// v2023 request body: the record's fields wrapped in a `document` object,
// optionally accompanied by `additionalInfo` and `batchId` (backend Joi
// schema: document required, additionalInfo max 1000, batchId max 100).
const workflowRequestBody = (schema: SchemaDescriptor) => {
  const required = mandatoryFieldNames(schema)
  return {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['document'],
          properties: {
            document: {
              type: 'object',
              ...(required.length && { required }),
              properties: documentProperties(schema)
            },
            additionalInfo: {
              type: 'string',
              maxLength: 1000,
              description: 'Optional free-text information accompanying the publication.'
            },
            batchId: {
              type: 'string',
              maxLength: 100,
              description: 'If multiple records are batched for publishing together.'
            }
          }
        }
      }
    }
  }
}

// Responses of the v2023 publish endpoints, per the backend controller:
// success returns { draft, workflow }; validation failures ALSO return 200
// with an { errors } body (the backend mirrors the legacy validator's
// status), so consumers must check the body, not just the status code.
const workflowResponses = (op: 'create' | 'update') => ({
  200: {
    description:
      'The record was published: the body carries the saved draft and the publishing workflow ' +
      'that was started. **Validation failures also return 200** — with an `errors` array in the ' +
      'body instead. Always check the response body, not just the status code.',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            draft: {
              type: 'object',
              description: 'The saved draft (identifier, documentID, working title, …).',
              properties: {
                identifier: { type: 'string', example: 'CB51626B-CF45-2AA0-3A24-459669DDCC34' }
              }
            },
            workflow: {
              type: 'object',
              description: 'The publishing workflow that was started.'
            },
            errors: {
              type: 'array',
              items: { type: 'object' },
              description: 'Validation errors — present instead of draft/workflow, still with HTTP 200.'
            }
          }
        }
      }
    }
  },
  ...standardErrorResponses(),
  400: {
    description:
      'Bad request: the realm is missing or not configured, the record type is not configured ' +
      'for the realm, the identifier in the path does not match `document.header.identifier`, ' +
      (op === 'create'
        ? 'a record or draft with the identifier already exists, '
        : 'no record or draft with the identifier exists, ') +
      'or the record is locked by a running workflow.'
  },
  403: {
    description:
      'Forbidden: the request is anonymous (`authorization_required`) or the account lacks ' +
      `the rights to ${op} a draft record of this type for the document's government.`
  }
})

const schemaPathParameter = (schema: string) => ({
  name: 'schema',
  in: 'path',
  required: true,
  schema: { type: 'string', example: schema },
  description: 'The document schema identifier.'
})

// POST /api/v2023/documents/schemas/{schema} — create and publish in one call.
export const createSpec = ({ apiUrl, realm, schema }: DocumentSpecOptions) =>
  baseSpec({
    title: `${schema.name} API`,
    description: schema.description,
    url: apiUrl,
    realm,
    paths: {
      '/api/v2023/documents/schemas/{schema}': {
        post: {
          summary: `Create a new ${schema.name} record`,
          description:
            `Creates a new ${schema.name} record and initiates the publishing workflow ` +
            '(identifier check, securities, validation, draft, workflow) in a single call.',
          tags: ['Create record'],
          security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
          parameters: [schemaPathParameter(schema.schema), realmQueryParameter(realm)],
          requestBody: workflowRequestBody(schema),
          responses: workflowResponses('create')
        }
      }
    }
  })

// PUT /api/v2023/documents/schemas/{schema}/{identifier} — update and republish.
export const updateSpec = ({ apiUrl, realm, schema }: DocumentSpecOptions) =>
  baseSpec({
    title: `${schema.name} API`,
    description: schema.description,
    url: apiUrl,
    realm,
    paths: {
      '/api/v2023/documents/schemas/{schema}/{identifier}': {
        put: {
          summary: `Update an existing ${schema.name} record`,
          description:
            `Updates an existing ${schema.name} record and re-runs the publishing workflow in a single call.`,
          tags: ['Update record'],
          security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
          parameters: [
            schemaPathParameter(schema.schema),
            {
              name: 'identifier',
              in: 'path',
              required: true,
              schema: { type: 'string', example: '449F8792-14A7-195E-35C8-1E66D57892BC' },
              description: 'Identifier of the record to update.'
            },
            realmQueryParameter(realm)
          ],
          requestBody: workflowRequestBody(schema),
          responses: workflowResponses('update')
        }
      }
    }
  })

// GET /api/v2013/documents/{uid} — raw record by identifier.
export const getSpec = ({ apiUrl, realm, schema }: DocumentSpecOptions) =>
  baseSpec({
    title: `${schema.name} API`,
    description: schema.description,
    url: apiUrl,
    realm,
    paths: {
      '/api/v2013/documents/{uid}': {
        get: {
          summary: `Get a ${schema.name} record by UID`,
          description: 'Load the record data in raw format.',
          tags: ['Get record'],
          parameters: [
            {
              name: 'Accept',
              in: 'header',
              required: true,
              schema: { type: 'string', enum: ['*', 'application/json'] },
              description: 'Result format. * = raw data as submitted, application/json = cast to JSON.'
            },
            uidParameter(),
            realmHeaderParameter(realm)
          ],
          responses: {
            200: {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      metadata: {
                        type: 'object',
                        properties: {
                          government: { type: 'string' },
                          userID: { type: 'string' },
                          schema: { type: 'string', example: schema.schema }
                        }
                      },
                      createdOn: { type: 'string', format: 'date-time' },
                      updatedOn: { type: 'string', format: 'date-time' },
                      type: { type: 'string' },
                      owner: { type: 'string' },
                      revision: { type: 'integer' },
                      title: { type: 'object' },
                      realm: { type: 'string', example: realm },
                      latestRevision: { type: 'integer' }
                    }
                  }
                }
              }
            },
            ...standardErrorResponses()
          }
        }
      }
    }
  })

// DELETE /api/v2013/documents/{uid}.
export const deleteSpec = ({ apiUrl, realm, schema }: DocumentSpecOptions) =>
  baseSpec({
    title: `${schema.name} API`,
    description: schema.description,
    url: apiUrl,
    realm,
    paths: {
      '/api/v2013/documents/{uid}': {
        delete: {
          summary: `Delete a ${schema.name} record`,
          description: 'Delete the record identified by its UID.',
          tags: ['Delete record'],
          security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
          parameters: [
            uidParameter(),
            {
              name: 'schema',
              in: 'query',
              required: true,
              schema: { type: 'string', example: schema.schema }
            },
            realmHeaderParameter(realm)
          ],
          responses: {
            200: { description: 'Record deleted' },
            ...standardErrorResponses()
          }
        }
      }
    }
  })

// GET /api/v2013/documents — OData-style listing filtered to the record type.
export const listSpec = ({ apiUrl, realm, schema }: DocumentSpecOptions) =>
  baseSpec({
    title: `${schema.name} API`,
    description: schema.description,
    url: apiUrl,
    realm,
    paths: {
      '/api/v2013/documents': {
        get: {
          summary: `List ${schema.name} records`,
          description: 'Query records with OData-style parameters.',
          tags: ['List records'],
          parameters: [
            {
              name: '$filter',
              in: 'query',
              required: false,
              schema: {
                type: 'string',
                ...(schema.listFilterExample && { example: schema.listFilterExample })
              },
              description: 'Filter expression selecting the record type.'
            },
            {
              name: '$orderby',
              in: 'query',
              required: false,
              schema: { type: 'string', example: 'updatedOn desc' },
              description: 'Sort order of the results.'
            },
            {
              name: '$top',
              in: 'query',
              required: false,
              schema: { type: 'integer', example: 10 },
              description: 'Maximum number of records to return.'
            },
            {
              name: '$skip',
              in: 'query',
              required: false,
              schema: { type: 'integer', example: 0 },
              description: 'Number of records to skip (paging).'
            },
            {
              name: 'collection',
              in: 'query',
              required: false,
              schema: { type: 'string', example: 'my' },
              description: 'Restrict the query to a collection (e.g. `my` = own records).'
            },
            realmHeaderParameter(realm)
          ],
          responses: {
            200: {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      Items: { type: 'array', items: { type: 'object' } },
                      Count: { type: 'integer' }
                    }
                  }
                }
              }
            },
            ...standardErrorResponses()
          }
        }
      }
    }
  })
