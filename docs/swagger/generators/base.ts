import type { Field, FieldType, SchemaDescriptor } from '../schemas/types'

// Shared OpenAPI plumbing for every clearing-house endpoint. Written once:
// a change to auth, servers or the realm header is a change to this file only.

const FIELD_SHAPES: Record<FieldType, object> = {
  string: { type: 'string' },
  lstring: { type: 'object', properties: { en: { type: 'string' } } },
  'string[]': { type: 'array', items: { type: 'string' } },
  term: { type: 'object', properties: { identifier: { type: 'string' } } },
  reference: { type: 'object', properties: { identifier: { type: 'string' } } },
  'link[]': { type: 'array', items: { type: 'object', properties: { url: { type: 'string' } } } }
}

const fieldToOpenApi = (field: Field) => ({
  ...FIELD_SHAPES[field.type],
  ...(field.example !== undefined && { example: field.example })
})

// Every document record carries the standard header block.
const headerProperty = (schema: string) => ({
  type: 'object',
  properties: {
    identifier: { type: 'string', example: '068C83BA-995F-08C3-50CE-AD43545B3EB5' },
    schema: { type: 'string', example: schema },
    languages: { type: 'array', items: { type: 'string' }, example: ['en'] }
  }
})

export const schemaParameter = (schema: string) => ({
  name: 'schema',
  in: 'query',
  required: true,
  schema: { type: 'string', example: schema }
})

export const realmParameter = (realm: string) => ({
  name: 'Realm',
  in: 'header',
  required: false,
  schema: { type: 'string', example: realm },
  description:
    'Context in which the Clearing-House request is made. ' +
    `For this application and environment the value is \`${realm}\`.`
})

export const requestBodyFor = (descriptor: SchemaDescriptor) => {
  const required = Object.entries(descriptor.fields)
    .filter(([, field]) => field.mandatory)
    .map(([name]) => name)

  return {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          ...(required.length && { required }),
          properties: {
            header: headerProperty(descriptor.schema),
            ...Object.fromEntries(
              Object.entries(descriptor.fields).map(([name, field]) => [name, fieldToOpenApi(field)])
            )
          }
        }
      }
    }
  }
}

export const standardErrorResponses = () => ({
  400: {
    description: 'Bad request',
    content: {
      'application/json': {
        example: { statusCode: 400, code: 'invalidParameter', fields: ['date'], message: 'Date format is invalid' }
      }
    }
  },
  401: {
    description: 'Unauthorized',
    content: {
      'application/json': {
        example: { statusCode: 401, code: 'unauthorized' }
      }
    }
  },
  403: {
    description: 'Forbidden',
    content: {
      'application/json': {
        example: { statusCode: 403, code: 'forbidden', message: 'Insufficient Privileges to create document [S10]' }
      }
    }
  }
})

export interface BaseSpecOptions {
  title: string
  description: string
  url: string
  realm: string
  paths: object
}

export const baseSpec = ({ title, description, url, realm, paths }: BaseSpecOptions) => ({
  openapi: '3.0.0',
  info: { title, description, version: '2.13.0' },
  servers: [{ url, description: '', variables: {} }],
  security: [{ BearerAuth: [] }, { ApiKeyAuth: [] }],
  components: {
    securitySchemes: {
      BearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: `Add the \`Realm\` header with value \`${realm}\`.`
      }
    }
  },
  paths
})
