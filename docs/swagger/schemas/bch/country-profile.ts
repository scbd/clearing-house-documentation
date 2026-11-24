import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `countryProfile` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const countryProfile: SchemaDescriptor = {
  schema: 'countryProfile',
  name: "Country Profile",
  description: "A Country Profile record in the Biosafety Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: {"identifier":"af"} },
  "profile": { title: "Additional information for the country profile", type: 'lstring', mandatory: true, example: {"en":"National overview of the biosafety framework, competent authorities and experience with living modified organisms."} },
  "notes": { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default countryProfile
