import type { SchemaDescriptor } from '../schemas/types'
import { baseSpec } from './base'

// Solr search generator: one parameterized source emitting the five variant
// specs the docs show as separate playground blocks (decision: keep the
// legacy five-block layout). All variants hit GET /api/v2013/index and differ
// only in their example query parameters.

export interface SolrSpecOptions {
  apiUrl: string
  realm: string
  schema: SchemaDescriptor
}

interface SolrVariant {
  key: string
  summary: string
  description: string
  parameters: (solrSchema: string) => object[]
}

const q = (example: string, description: string) => ({
  name: 'q',
  in: 'query',
  required: true,
  schema: { type: 'string', example },
  description
})

const fq = (example: string, description: string) => ({
  name: 'fq',
  in: 'query',
  required: false,
  schema: { type: 'string', example },
  description
})

const VARIANTS: SolrVariant[] = [
  {
    key: 'all-records',
    summary: 'Query all records',
    description: 'Retrieve records of this type.',
    parameters: (s) => [q(`schema_s:${s}`, 'Query for all records of the schema.')]
  },
  {
    key: 'by-country',
    summary: 'Query records by country',
    description: 'Retrieve records of this type filtered by government (country).',
    parameters: (s) => [
      q(`schema_s:${s}`, 'Query for all records of the schema.'),
      fq('government_s:ht', 'Filter by government (ISO country code).')
    ]
  },
  {
    key: 'by-query',
    summary: 'Query records by free text',
    description: 'Retrieve records of this type matching a free-text query.',
    parameters: (s) => [
      q(`schema_s:${s} AND text_EN_txt:biodiversity`, 'Schema query combined with a free-text search.')
    ]
  },
  {
    key: 'by-region',
    summary: 'Query records by region',
    description: 'Retrieve records of this type filtered by region.',
    parameters: (s) => [
      q(`schema_s:${s}`, 'Query for all records of the schema.'),
      fq('regions_ss:africa', 'Filter by region.')
    ]
  },
  {
    key: 'with-subfilters',
    summary: 'Query records with sub-filters',
    description: 'Retrieve records of this type with multiple combined filters.',
    parameters: (s) => [
      q(`schema_s:${s}`, 'Query for all records of the schema.'),
      fq('government_s:ht AND schemaType_s:reference', 'Multiple filters combined with AND.')
    ]
  }
]

const solrResponse = (solrSchema: string) => ({
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
                uniqueIdentifier_s: 'example-record-1',
                schema_s: solrSchema,
                title_EN_s: 'Example record title',
                schemaType_s: 'reference',
                government_s: 'ht'
              }
            ]
          },
          nonSupportedParams: []
        }
      }
    }
  },
  400: { description: 'Bad request, possibly due to a malformed query parameter' }
})

// Returns the five variant specs, in display order.
export const solrSpecs = ({ apiUrl, realm, schema }: SolrSpecOptions) => {
  const solrSchema = schema.solrSchema ?? schema.schema
  return VARIANTS.map((variant) =>
    baseSpec({
      title: `${schema.name} API`,
      description: schema.description,
      url: apiUrl,
      realm,
      paths: {
        '/api/v2013/index': {
          get: {
            summary: variant.summary,
            description: variant.description,
            tags: [variant.summary],
            parameters: variant.parameters(solrSchema),
            responses: solrResponse(solrSchema)
          }
        }
      }
    })
  )
}
