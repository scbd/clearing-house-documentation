import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `biosafetyLaw` record type.
const law: SchemaDescriptor = {
  schema: 'biosafetyLaw',
  name: "Law / Regulation",
  description: "A Law / Regulation record in the Biosafety Clearing-House.",
  fields: {
  "government": { title: "Country submitting a law, regulation, guideline or agreement", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "jurisdiction": { title: "Area of jurisdiction", type: 'term', example: {"identifier":"7437F880-7B12-4F26-AA91-CED37250DD0A"} },
  "jurisdictionsDetails": { title: "", type: 'lstring' },
  "title": { title: "Title of document", type: 'lstring', mandatory: true, example: {"en":"Test Title"} },
  "description": { title: "Brief description of the document including objective and scope", type: 'lstring', example: {"en":"<div><!--block-->Test description</div>"} },
  "type": { title: "Type of Law / Regulation", type: 'term', mandatory: true, example: {"identifier":"57217527-3732-437F-9AD8-45BEF4429FD5"} },
  "entryIntoForce": { title: "Date of entry into force", type: 'datetime' },
  "documents": { title: "Document text", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "documentsInfo": { title: "Only use this field to provide details of how to obtain a copy of the document if it is not available as an attachment or online.", type: 'lstring', example: {"en":"<div><!--block-->Test description</div>"} },
  "unofficialDocuments": { title: "Unofficial Documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "isAmendment": { title: "Is this an amendment to a law, regulation, guideline or agreement already published on the BCH?", type: 'bool', mandatory: true, example: true },
  "amendedRecords": { title: "Please select the record(s) containing the law/regulation being amended", type: 'reference[]', example: [{"identifier":"7A5D391B-BEC7-30FF-FB73-CD50E6577AA1@2"}] },
  "amendmentsDetails": { title: "Please provide a brief summary of the amendment(s)", type: 'lstring', example: {"en":"<div><!--block-->Test Summary</div>"} },
  "relatedRecords": { title: "Relationship with other laws/regulations", type: 'reference[]', example: [{"identifier":"7A5D391B-BEC7-30FF-FB73-CD50E6577AA1@2"}] },
  "relationDetails": { title: "Please describe the relationship between the measures", type: 'lstring', example: {"en":"<div><!--block-->Test description</div>"} },
  "authorities": { title: "Competent National Authority(ies) and/or Supplementary Protocol Competent Authority(ies)", type: 'reference[]', mandatory: true, example: [{"identifier":"78AFAA88-47EA-9333-AD6E-C21BCB17DE21@1"}] },
  "cpbSubjectAreas": { title: "Subject areas", type: 'term[]', mandatory: true, example: [{"identifier":"1DCBA126-60F1-440D-BBB0-CC9CCC91C283"}] },
  "cpbOrganismTypes": { title: "Types of organisms addressed", type: 'term[]', mandatory: true, example: [{"identifier":"65F83475-FBFD-4DCA-9DD8-10FC253A2F84"}] },
  "expires": { title: "Should this information be confirmed or updated after two years from the date of submission?", type: 'bool', mandatory: true, example: true },
  "relevantInformation": { title: "Please use this field to provide any other relevant information that may not have been addressed elsewhere in the record.", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
  }
}

export default law
