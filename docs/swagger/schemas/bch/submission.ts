import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `submission` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const submission: SchemaDescriptor = {
  schema: 'submission',
  name: "Submission",
  description: "A Submission record in the Biosafety Clearing-House.",
  fields: {
  "government": { title: "Government", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"af"} },
  "organization": { title: "Organization (obsolete — use organizations)", type: 'reference', example: {"identifier":"04139A35-1F8B-FC94-45D6-4F3AD7675685@1"} },
  "organizations": { title: "Organization(s)", type: 'reference[]', example: [{"identifier":"04139A35-1F8B-FC94-45D6-4F3AD7675685@1"}] },
  "title": { title: "Title of the submission", type: 'lstring', mandatory: true, example: {"en":"Fourth national report on the implementation of the Cartagena Protocol"} },
  "date": { title: "Date of submission", type: 'date', mandatory: true },
  "notifications": { title: "Related notification(s)", type: 'reference[]', mandatory: true, example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "records": { title: "Related record(s)", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "cpbThematicAreas": { title: "Thematic areas", type: 'term[]', example: [{"identifier":"043C7F0D-2226-4E54-A56F-EE0B74CCC984"}] },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"Further details are available from the national focal point on request."} },
  "relevantDocuments": { title: "Documents", type: 'link[]', mandatory: true, example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default submission
