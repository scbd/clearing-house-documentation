import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `countryProfile` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const countryProfile: SchemaDescriptor = {
  schema: 'countryProfile',
  name: "Country Profile",
  description: "A Country Profile record in the Biosafety Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"af"} },
  "profile": { title: "Profile", type: 'lstring', example: {"en":"Test information"} },
  "relevantInformation": { title: "Relevant information", type: 'lstring', example: {"en":"Test information"} },
  "relevantDocuments": { title: "Relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Test notes" }
  }
}

export default countryProfile
