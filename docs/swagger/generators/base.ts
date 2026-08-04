import type { Field, FieldType, SchemaDescriptor } from '../schemas/types'

// Shared OpenAPI plumbing for every clearing-house endpoint. Written once:
// a change to auth, servers or the realm parameter is a change to this file
// only. Each endpoint generator owns its full versioned path — servers.url
// is always the bare API host.

const FIELD_SHAPES: Record<FieldType, object> = {
  string: { type: 'string' },
  lstring: { type: 'object', properties: { en: { type: 'string' } } },
  'string[]': { type: 'array', items: { type: 'string' } },
  'lstring[]': { type: 'array', items: { type: 'object', properties: { en: { type: 'string' } } } },
  term: { type: 'object', properties: { identifier: { type: 'string' } } },
  'term[]': { type: 'array', items: { type: 'object', properties: { identifier: { type: 'string' } } } },
  reference: { type: 'object', properties: { identifier: { type: 'string' } } },
  'reference[]': { type: 'array', items: { type: 'object', properties: { identifier: { type: 'string' } } } },
  'link[]': { type: 'array', items: { type: 'object', properties: { url: { type: 'string' } } } },
  mapLocation: {
    type: 'object',
    properties: { zoom: { type: 'integer' }, lat: { type: 'number' }, lng: { type: 'number' } }
  }
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

export const documentProperties = (descriptor: SchemaDescriptor) => ({
  header: headerProperty(descriptor.schema),
  ...Object.fromEntries(
    Object.entries(descriptor.fields).map(([name, field]) => [name, fieldToOpenApi(field)])
  )
})

export const mandatoryFieldNames = (descriptor: SchemaDescriptor) =>
  Object.entries(descriptor.fields)
    .filter(([, field]) => field.mandatory)
    .map(([name]) => name)

// v2013 style: realm travels as an HTTP header.
export const realmHeaderParameter = (realm: string) => ({
  name: 'Realm',
  in: 'header',
  required: false,
  schema: { type: 'string', example: realm },
  description:
    'Context in which the Clearing-House request is made. ' +
    `For this application and environment the value is \`${realm}\`.`
})

// v2023 style: realm travels as a query parameter.
export const realmQueryParameter = (realm: string) => ({
  name: 'realm',
  in: 'query',
  required: true,
  schema: { type: 'string', example: realm },
  description:
    'Realm used for the request. ' +
    `For this application and environment the value is \`${realm}\`. ` +
    'May alternatively be sent as the `Realm` HTTP header.'
})

export const uidParameter = () => ({
  name: 'uid',
  in: 'path',
  required: true,
  schema: { type: 'string', pattern: '^[A-Za-z0-9\\-_]{11,128}$' },
  description: 'Identifier of the record. The value is case-sensitive.'
})

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
        example: { statusCode: 403, code: 'forbidden', message: 'Insufficient Privileges [S10]' }
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
