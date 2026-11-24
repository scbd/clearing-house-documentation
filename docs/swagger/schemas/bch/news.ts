import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `biosafetyNews` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const news: SchemaDescriptor = {
  schema: 'biosafetyNews',
  name: "Biosafety News",
  description: "A Biosafety News record in the Biosafety Clearing-House.",
  fields: {
  "country": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: {"identifier":"af"} },
  "title": { title: "Title of the record", type: 'lstring', mandatory: true, example: {"en":"Workshop on detection and identification of living modified organisms announced"} },
  "nodeAddress": { title: "Relevant link(s)", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "newsAbstract": { title: "Abstract", type: 'lstring', example: {"en":"A regional workshop on LMO detection will be held next spring for national biosafety practitioners."} },
  "newsText": { title: "News text", type: 'lstring', mandatory: true, example: {"en":"The Secretariat invites Parties to nominate participants for a regional capacity-building workshop on the detection and identification of living modified organisms."} },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"Further details are available from the national focal point on request."} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default news
