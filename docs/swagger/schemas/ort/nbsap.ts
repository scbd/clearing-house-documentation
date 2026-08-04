import type { SchemaDescriptor } from '../types'

// The Online Reporting Tool identity of the `nbsap` record type.
const nbsap: SchemaDescriptor = {
  schema: 'nbsap',
  name: "NBSAP",
  description: "A NBSAP record in the Online Reporting Tool.",
  fields: {
  "government": { title: "Government", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "title": { title: "Enter NBSAP title", type: 'lstring', mandatory: true, example: {"en":"Test Info"} },
  "summary": { title: "Summary", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "jurisdiction": { title: "Level of application", type: 'term', mandatory: true, example: {"identifier":"7437F880-7B12-4F26-AA91-CED37250DD0A"} },
  "jurisdictionInfo": { title: "Additional Information (Level of application)", type: 'lstring' },
  "isGbfAligned": { title: "Is the submission in alignment with the Kunming-Montreal Global Biodiversity Framework?", type: 'bool', mandatory: true, example: true },
  "startDate": { title: "From", type: 'datetime', mandatory: true },
  "endDate": { title: "To", type: 'datetime', mandatory: true },
  "status": { title: "Status", type: 'term', mandatory: true, example: {"identifier":"9D17F3A2-EC92-4D31-81EF-A12521873D7F"} },
  "completionYear": { title: "", type: 'string' },
  "adoptionDate": { title: "Date of completion and adoption", type: 'string' },
  "approvedStatus": { title: "Status of approved document", type: 'term', example: {"identifier":"EE6F3AAE-E365-46C3-B73F-ED5FE3DFAACA"} },
  "approvingBody": { title: "Approving body", type: 'term', example: {"identifier":"EFAF31F0-1E48-4165-B60B-B55F132DB932"} },
  "approvingBodyInfo": { title: "Please select approving body", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "documentText": { title: "", type: 'lstring' },
  "documentLinks": { title: "NBSAP document(s) and websites, links or other relevant document(s)", type: 'link[]', mandatory: true, example: [{"url":"https://www.google.comm","name":"Google","language":"en"}] },
  "relevantInformation": { title: "Please use this field to provide any other relevant information that may not have been addressed elsewhere in the record.", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "relevantDocuments": { title: "", type: 'link[]' }
  }
}

export default nbsap
