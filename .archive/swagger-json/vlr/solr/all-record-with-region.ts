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
        summary: 'Query with specific country region criteria',
        description: 'Retrieve records by schema and country region criteria.',
        tags: [
          'Get results with region'
        ],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              example: 'schema_s:resource AND countryRegions_ss:5E5B7AA4\\-2420\\-4147\\-825B\\-0820F7EC5A4B'
            },
            description: 'Query parameter for searching results based on schema and country region criteria.'
          }
        ],
        responses: {
          200: {
            description: 'Successful response with a list of records matching the criteria',
            content: {
              'application/json': {
                example: {
                  response: {
                    numFound: 50,
                    start: 0,
                    docs: [
                      {
                        uniqueIdentifier_s: `${domain}-vlr-scbd-255942-1`,
                        schema_s: 'resource',
                        title_s: 'bird genes can be used to create flying avocados',
                        title_AR_s: 'bird genes can be used to create flying avocados',
                        title_EN_s: 'bird genes can be used to create flying avocados',
                        title_ES_s: 'bird genes can be used to create flying avocados',
                        title_FR_s: 'bird genes can be used to create flying avocados',
                        schemaType_s: 'reference',
                        government_s: 'ht',
                        url_ss: [
                          `${baseUrl}/database/record/255719`
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
