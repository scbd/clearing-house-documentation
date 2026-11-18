import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `submission` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const submission: SchemaDescriptor = {
  schema: 'submission',
  name: "Submission",
  description: "A Submission record in the Biosafety Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"af"} },
  "organization": { title: "Organization (obsolete — use organizations)", type: 'reference', example: {"identifier":"04139A35-1F8B-FC94-45D6-4F3AD7675685@1"} },
  "organizations": { title: "Organizations", type: 'reference[]', example: [{"identifier":"04139A35-1F8B-FC94-45D6-4F3AD7675685@1"}] },
  "title": { title: "Title", type: 'lstring', example: {"en":"Test title"} },
  "date": { title: "Date", type: 'datetime' },
  "notifications": { title: "Notifications", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "records": { title: "Records", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "cbdThematicAreas": { title: "CBD thematic areas", type: 'term[]' },
  "absThematicAreas": { title: "ABS thematic areas", type: 'term[]', example: [{"identifier":"CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924"}] },
  "cpbThematicAreas": { title: "CPB thematic areas", type: 'term[]', example: [{"identifier":"043C7F0D-2226-4E54-A56F-EE0B74CCC984"}] },
  "relevantInformation": { title: "Relevant information", type: 'lstring', example: {"en":"Test information"} },
  "relevantDocuments": { title: "Relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Test notes" }
  }
}

export default submission
