import type { OpenAPI3 } from 'openapi-typescript'

export default (url: string): OpenAPI3 => ({
  openapi: '3.0.0',
  info: {
    title: 'File Upload to User-defined URL',
    description: 'API to upload a file in binary format to a user-defined URL.',
    version: '1.0.0'
  },
  servers: [
    {
      url,
      description: 'Development Server',
      variables: {}
    }
  ],
  paths: {
    '/': {
      put: {
        summary: 'Upload File to User-defined URL',
        description: 'Allows the user to upload a file in binary format to a provided URL.',
        tags: ['Upload File (Readonly)'],
        requestBody: {
          required: true,
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  file: {
                    type: 'file',
                    format: 'binary',
                    description: 'The file to upload in binary format.'
                  }
                },
                required: ['file']
              }
            }
          }
        },
        responses: {
          200: {
            description: 'File uploaded successfully.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'File uploaded successfully.'
                    }
                  }
                }
              }
            }
          },
          400: {
            description: 'Invalid URL or file upload failed.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Invalid URL or file could not be uploaded.'
                    }
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
