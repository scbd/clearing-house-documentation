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

// v2023 request body: the record's fields wrapped in a `document` object.
const workflowRequestBody = (schema: SchemaDescriptor) => {
  const required = mandatoryFieldNames(schema)
  return {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            document: {
              type: 'object',
              ...(required.length && { required }),
              properties: documentProperties(schema)
            }
          }
        }
      }
    }
  }
}

const workflowSuccessResponse = () => ({
  200: {
    description: 'Document created successfully; the publishing workflow has been initiated.',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            draft: {
              type: 'object',
              properties: {
                header: {
                  type: 'object',
                  properties: {
                    identifier: { type: 'string', example: 'CB51626B-CF45-2AA0-3A24-459669DDCC34' }
                  }
                }
              }
            }
          }
        }
      }
    }
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
          responses: {
            ...workflowSuccessResponse(),
            ...standardErrorResponses()
          }
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
          responses: {
            ...workflowSuccessResponse(),
            ...standardErrorResponses()
          }
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
