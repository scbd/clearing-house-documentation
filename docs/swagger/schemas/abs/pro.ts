import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `absProcedure` record type.
const pro: SchemaDescriptor = {
  schema: 'absProcedure',
  name: "ABS Procedure",
  description: "A ABS Procedure record in the ABS Clearing-House.",
  fields: {
  "government": { title: "Country", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "name": { title: "This is an ABS procedure for:", type: 'lstring', mandatory: true, example: {"en":"Test Info"} },
  "jurisdiction": { title: "Area of jurisdiction", type: 'term', mandatory: true, example: {"identifier":"5B6177DD-5E5E-434E-8CB7-D63D67D5EBED","customValue":{"en":"Test Jurisdiction"}} },
  "contacts": { title: "Where should applications for access be made?", type: 'reference[]', mandatory: true, example: [{"identifier":"DECLARE-ORGANISATION_24185_20241104154859186@1"}] },
  "links": { title: "Where should applications for access be made?", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "requirements": { title: "What are the conditions or requirements a potential user needs to fulfil to apply for access?", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "description": { title: "Please provide a step-by-step description or a visual representation of the ABS procedure", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "descriptionLinks": { title: "For example, you may wish to attach a flow chart or timeline.", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "hasApplicationDocuments": { title: "Does the applicant need to provide any documents?", type: 'bool', mandatory: true, example: true },
  "applicationInformation": { title: "Please provide information on application forms or required documents (e.g.: copy of applicant’s national passport)", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "applicationLinks": { title: "Please attach relevant application form/documents or provide a link to website", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "applicationContacts": { title: "Please provide information on whom the application should be sent to", type: 'reference[]', example: [{"identifier":"DECLARE-ORGANISATION_24185_20241104154859186@1"}] },
  "hasApplicationFees": { title: "Are there application fees?", type: 'bool', mandatory: true, example: true },
  "applicationFeesInformation": { title: "Please provide any additional information on application fees", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "duration": { title: "How long does the application process take", type: 'int', example: 3 },
  "durationPeriod": { title: "Days Months Years", type: 'string' },
  "relevantMeasures": { title: "Relevant ABS measure(s)", type: 'reference[]', example: [{"identifier":"A3722021-0CC0-B195-75BE-954F133FF78B@1"}] },
  "keywords": { title: "Keywords", type: 'term[]', example: [{"identifier":"EC94899F15EE40C6A0F7D0B1F774A521"}] },
  "relevantInformation": { title: "Please use this field to provide any other relevant information that may not have been addressed elsewhere in the record.", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "relevantDocuments": { title: "Other relevant website addresses and/or attached documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
  }
}

export default pro
