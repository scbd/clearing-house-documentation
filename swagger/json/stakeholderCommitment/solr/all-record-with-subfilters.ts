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
        summary: 'Query Solr with government, usage, and keyword criteria',
        description: 'Retrieve records by schema, government, usage, and keyword criteria. Note: The value of `usages_ss` and `keywords_ss` fields may contain special characters that need to be escaped. Refer to the [Apache Solr](/apache-solr) for a list of special characters and how to escape them.',
        tags: ['Get All results with sub-filters'],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              example: 'schema_s:stakeholderCommitment AND jurisdiction_s:7437F880\\-7B12-4F26\\-AA91\\-CED37250DD0A'
            },
            description: 'Query parameter for searching results based on schema, jurisdiction_s, indicators_ss...'
          }
        ],
        responses: {
          200: {
            description: 'Successful response with a list of records matching the criteria',
            content: {
              'application/json': {
                example: {
                  response: {
                    numFound: 25,
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
