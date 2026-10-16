// POST /api/v2013/authentication/token — exchange CBD account credentials
// for a bearer token. Account-level: accounts are shared across the clearing
// houses, so the spec carries no realm and no security scheme. Invalid
// credentials return 403 with an empty body (observed on the live API; the
// archived spec claimed 400/401).

export interface AuthenticationSpecOptions {
  apiUrl: string
}

export const authenticationTokenSpec = ({ apiUrl }: AuthenticationSpecOptions) => ({
  openapi: '3.0.0',
  info: {
    title: 'User Authentication API',
    description: 'Authenticate a CBD account and obtain an authorization token.',
    version: '2.13.0'
  },
  servers: [{ url: apiUrl, description: '', variables: {} }],
  paths: {
    '/api/v2013/authentication/token': {
      post: {
        summary: 'Obtain an authorization token',
        description:
          'Authenticate with a CBD account email and password to obtain the bearer token ' +
          'used by protected endpoints.',
        tags: ['User authentication'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', example: 'your.email@example.com' },
                  password: { type: 'string', example: 'yourpassword' }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Successful authentication',
            content: {
              'application/json': {
                example: {
                  authenticationToken: '<AUTHENTICATION TOKEN>',
                  expiration: '2024-07-17T02:01:54.2274392Z'
                }
              }
            }
          },
          403: { description: 'Invalid credentials (empty response body)' }
        }
      }
    }
  }
})
