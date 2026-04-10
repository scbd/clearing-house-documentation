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
        summary: 'Query Solr index',
        description: 'Load information from Solr index.',
        tags: ['Get all result with query'],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              example: 'schema_s:absCheckpointCommunique'
            },
            description: 'Query parameter for searching records based on schema.'
          },
          {
            name: 'fl',
            in: 'query',
            schema: {
              type: 'string'
            },
            description: 'Fields to return in the search results. Use comma-separated field names to specify which fields should be included in the response.'
          },
          {
            name: 'sort',
            in: 'query',
            schema: {
              type: 'string'
            },
            description: 'Specifies the sort order of the results. The format is fieldname desc for descending or fieldname asc for ascending.'
          },
          {
            name: 'start',
            in: 'query',
            schema: {
              type: 'string'
            },
            description: 'The starting offset for the results. This parameter allows pagination by specifying the index of the first result to return.'
          },
          {
            name: 'rows',
            in: 'query',
            schema: {
              type: 'string'
            },
            description: 'The number of results to return. Default value is 10 if not specified.',
            default: '10'
          }
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                example: {
                  response: {
                    numFound: 25,
                    start: 0,
                    docs: [
                      {
                        uniqueIdentifier_s: `${domain}-cpc-ht-207337-2`,
                        schema_s: `${name.value}CheckpointCommunique`,
                        title_s: 'EXT20200505-005-290',
                        title_AR_s: 'EXT20200505-005-290',
                        title_EN_s: 'EXT20200505-005-290',
                        title_ES_s: 'EXT20200505-005-290',
                        title_FR_s: 'EXT20200505-005-290',
                        schemaType_s: 'national',
                        government_s: 'ht',
                        url_ss: [
                          `${baseUrl}/database/record?documentID=207337`
                        ]
                      }
                    ]
                  },
                  nonSupportedParams: []
                }
              }
            }
          }
        }
      }
    }
  },
  definitions: {}
})
