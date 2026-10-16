// Thesaurus (controlled-vocabulary) generator. Unlike the documents API,
// thesaurus reads are realm-agnostic and public: one uniform call returns the
// terms of a vocabulary (a "domain"). Every vocabulary shares the same term
// response shape; only the endpoint path and display name differ, so each
// vocabulary descriptor carries just its literal path and name.

export interface ThesaurusSpecOptions {
  apiUrl: string
  /** Full literal endpoint path, e.g. `/api/v2013/thesaurus/domains/countries/terms`. */
  path: string
  /** Vocabulary display name, e.g. `Countries`. */
  name: string
}

const localizedString = () => ({
  type: 'object',
  properties: Object.fromEntries(
    ['en', 'es', 'fr', 'ar', 'ru', 'zh'].map((l) => [l, { type: 'string' }])
  )
})

// One term of a controlled vocabulary.
const termSchema = () => ({
  type: 'object',
  properties: {
    termId: { type: 'integer', example: 1217 },
    identifier: { type: 'string', example: 'ad' },
    name: { type: 'string', example: 'Andorra' },
    title: localizedString(),
    shortTitle: { type: 'object' },
    description: { type: 'string' },
    longDescription: localizedString(),
    source: { type: 'string' },
    broaderTerms: { type: 'array', items: { type: 'string' } },
    narrowerTerms: { type: 'array', items: { type: 'string' } },
    relatedTerms: { type: 'array', items: { type: 'string' } }
  }
})

const isSingleTerm = (path: string) => /\/thesaurus\/terms\//.test(path)

export const thesaurusTermsSpec = ({ apiUrl, path, name }: ThesaurusSpecOptions) => {
  const single = isSingleTerm(path)
  return {
    openapi: '3.0.0',
    info: {
      title: `${name} Thesaurus API`,
      description: `Controlled vocabulary: ${name}.`,
      version: '2.13.0'
    },
    servers: [{ url: apiUrl, description: '', variables: {} }],
    paths: {
      [path]: {
        get: {
          summary: single ? `Get the ${name} term` : `List ${name} terms`,
          description: single
            ? `Retrieve a single term of the ${name} vocabulary.`
            : `Retrieve the terms of the ${name} vocabulary.`,
          tags: [name],
          parameters: [
            {
              name: 'Accept',
              in: 'header',
              required: false,
              schema: { type: 'string', enum: ['application/json'] },
              description: 'Result format.'
            }
          ],
          responses: {
            200: {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: single ? termSchema() : { type: 'array', items: termSchema() }
                }
              }
            },
            404: { description: 'Vocabulary or term not found' }
          }
        }
      }
    }
  }
}
