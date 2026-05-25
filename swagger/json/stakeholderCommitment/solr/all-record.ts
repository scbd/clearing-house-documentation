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
        summary: 'Query all results',
        description: 'Retrieve records by schema query.',
        tags: ['Get All resullts'],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              example: 'schema_s:stakeholderCommitment'
            },
            description: 'Query parameter for searching results based on schema.'
          }
        ],
        responses: {
          200: {
            description: 'Successful response with a list of records',
            content: {
              'application/json': {
                example: {
                  response: {
                    numFound: 150,
                    start: 0,
                    docs: [
                      {
                        uniqueIdentifier_s: `${domain}-scm-scbd-279173-3`,
                        schema_s: 'stakeholderCommitment',
                        title_s: 'Stakeholder Commitment',
                        title_AR_s: 'Stakeholder Commitment',
                        title_EN_s: 'Stakeholder Commitment',
                        title_ES_s: 'Stakeholder Commitment',
                        title_FR_s: 'Stakeholder Commitment',
                        schemaType_s: 'reference',
                        url_ss: [
                          `${baseUrl}/database/record?documentID=279173`
                        ]
                      }
                    ]
                  },
                  nonSupportedParams: []
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
