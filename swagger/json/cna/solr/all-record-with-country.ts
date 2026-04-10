import type { OpenAPI3 } from 'openapi-typescript'
import type { ClearingHouse } from '@/utils/composables/useClearingHouse'

export default ({ apiUrl, baseUrl, name, domain }: ClearingHouse): OpenAPI3 => ({
  openapi: '3.0.0',
  info: {
    title: 'Records API',
    description: 'API to publish new records.',
    version: '2.13.0'
  },
  servers: [
    {
      url: apiUrl,
      description: '',
      variables: {}
    }
  ],
  security: [
    {
      BearerAuth: []
    },
    {
      ApiKeyAuth: []
    }
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      },
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: 'Add the `Realm` header with value `abs-dev`.'
      }
    }
  },
  paths: {
    '/index': {
      get: {
        summary: 'Query results with specific criteria',
        description: 'Retreive records for a given government.',
        tags: ['Get All results with country'],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              example: 'schema_s:authority AND government_s:ht'
            },
            description: 'Query parameter for searching results based on schema and government criteria.'
          }
        ],
        responses: {
          200: {
            description: 'Successful response with a list of records matching the criteria',
            content: {
              'application/json': {
                example: {
                  response: {
                    numFound: 100,
                    start: 0,
                    docs: [
                      {
                        uniqueIdentifier_s: `${domain}-cna-np-255982-1`,
                        schema_s: 'authority',
                        title_s: 'Ministry of Forests and Environment',
                        title_AR_s: 'Ministry of Forests and Environment',
                        title_EN_s: 'Ministry of Forests and Environment',
                        title_ES_s: 'Ministry of Forests and Environment',
                        title_FR_s: 'Ministry of Forests and Environment',
                        schemaType_s: 'national',
                        government_s: 'ht',
                        url_ss: [
                          `${baseUrl}/database/record?documentID=255333`
                        ]
                      }
                    ]
                  }
                }
              }
            }
          },
          400: {
            description: 'Bad request, possibly due to malformed query parameter'
          }
        }
      }
    }
  },
  definitions: {}
})
