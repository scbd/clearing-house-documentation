import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `biosafetyNews` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const news: SchemaDescriptor = {
  schema: 'biosafetyNews',
  name: "Biosafety News",
  description: "A Biosafety News record in the Biosafety Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"af"} },
  "title": { title: "Title", type: 'lstring', example: {"en":"Test title"} },
  "nodeAddress": { title: "Node address", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "newsAbstract": { title: "News abstract", type: 'lstring', example: {"en":"Test information"} },
  "newsText": { title: "News text", type: 'lstring', example: {"en":"Test information"} },
  "relevantInformation": { title: "Relevant information", type: 'lstring', example: {"en":"Test information"} },
  "relevantDocuments": { title: "Relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Test notes" }
  }
}

export default news
