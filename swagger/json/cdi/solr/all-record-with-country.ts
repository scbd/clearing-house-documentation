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
        tags: [
          'Get All results with country'
        ],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              example: 'schema_s:capacityBuildingInitiative AND government_s:ht'
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
                        uniqueIdentifier_s: `${domain}-cbi-scbd-206701-1`,
                        schema_s: 'capacityBuildingInitiative',
                        title_s: 'Biosafety - An International Short Course in Environmental Aspects of Agricultural Biotechnology',
                        title_AR_s: 'السلامة الأحيائية - دورة دولية قصيرة حول الجوانب البيئية للتكنولوجيا الحيوية الزراعية',
                        title_EN_s: 'Biosafety - An International Short Course in Environmental Aspects of Agricultural Biotechnology',
                        title_ES_s: 'Bioseguridad - Un Curso Internacional Corto sobre Aspectos Ambientales de la Biotecnología Agrícola',
                        title_FR_s: 'Biosécurité - Un Cours International Court sur les Aspects Environnementaux de la Biotechnologie Agricole',
                        schemaType_s: 'reference',
                        government_s: 'ht',
                        url_ss: [
                          `${baseUrl}/database/record/255628`
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
