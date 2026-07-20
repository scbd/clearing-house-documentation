import type { SchemaDescriptor } from '../schemas/types'
import {
  baseSpec, realmParameter, requestBodyFor, schemaParameter, standardErrorResponses
} from './base'

export interface DocumentSpecOptions {
  apiUrl: string
  realm: string
  schema: SchemaDescriptor
}

// POST /documents — same endpoint for every app and record type; the schema
// descriptor and the realm give the spec its identity.
export const createSpec = ({ apiUrl, realm, schema }: DocumentSpecOptions) =>
  baseSpec({
    title: `${schema.name} API`,
    description: schema.description,
    url: apiUrl,
    realm,
    paths: {
      '/documents': {
        post: {
          summary: `Create a new ${schema.name} record`,
          description: `Publish a new ${schema.name} record.`,
          tags: ['Create record'],
          security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
          parameters: [schemaParameter(schema.schema), realmParameter(realm)],
          requestBody: requestBodyFor(schema),
          responses: {
            200: {
              description: 'Successful operation',
              content: {
                'application/json': {
                  example: {
                    identifier: 'abcdefgh-123',
                    documentID: 12345,
                    owner: 'user:123',
                    revision: 1,
                    realm,
                    mediaType: 'application/json',
                    charset: 'utf-8',
                    createdOn: '2013-04-08T19:44:04.943Z',
                    createdBy: { userID: 123, firstName: 'John', lastName: 'Smith', email: 'fake.john.smith@cbd.int' }
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
