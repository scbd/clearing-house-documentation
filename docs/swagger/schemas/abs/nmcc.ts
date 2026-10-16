import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `absNationalModelContractualClause` record type.
const nmcc: SchemaDescriptor = {
  schema: 'absNationalModelContractualClause',
  name: "National Model Contractual Clause",
  description: "A National Model Contractual Clause record in the ABS Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: {"identifier":"af"} },
  "title": { title: "Title", type: 'lstring', mandatory: true, example: {"en":"Test title"} },
  "description": { title: "Summary or abstract", type: 'lstring', example: {"en":"<div><!--block-->Test summary</div>"} },
  "jurisdiction": { title: "Area of jurisdiction", titleLink: '/thesaurus/jurisdictions', type: 'term', example: {"identifier":"7437F880-7B12-4F26-AA91-CED37250DD0A"} },
  "relevantMeasures": { title: "Relevant ABS Measure(s)", type: 'reference[]', example: [{"identifier":"A3722021-0CC0-B195-75BE-954F133FF78B@1"}] },
  "keywords": { title: "Please select the relevant keywords", titleLink: '/thesaurus/mcc-keywords', type: 'term[]', mandatory: true, example: [{"identifier":"7F45AB1F-9925-482E-B0CD-CD842960825F"}] },
  "thematicAreas": { title: "Thematic area(s)", titleLink: '/thesaurus/thematic-areas', type: 'term[]', example: [{"identifier":"1D2710D3-75C8-475D-8634-F912F06DAF25"},{"identifier":"822EC80937524039A912E87DC0041A89"}] },
  "resourceLinks": { title: "Link to the resource(s)", type: 'link[]', mandatory: true },
  "relevantInformation": { title: "Relevant information about the attachment(s)", type: 'lstring', example: {"en":"<div><!--block-->Test Link</div>"} },
  "relevantDocuments": { title: "Please attach the relevant files, documents, or resources", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google.com","language":"en"}] }
  }
}

export default nmcc
