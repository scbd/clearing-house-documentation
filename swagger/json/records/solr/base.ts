import type { OpenAPI3 } from 'openapi-typescript'

export default (url: string): OpenAPI3 => ({
  openapi: '3.0.0',
  info: {
    title: 'Index API',
    version: '1.0.0',
    description: 'API for querying results with specific government criteria.'
  },
  servers: [
    {
      url,
      description: 'Index API Server',
      variables: {}
    }
  ],
  paths: {
    '/index': {
      get: {
        parameters: [],
        responses: {}
      }
    }
  }
})
