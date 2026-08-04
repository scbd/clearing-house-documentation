import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `measure` record type.
const msr: SchemaDescriptor = {
  schema: 'measure',
  name: "Measure",
  description: "A Measure record in the ABS Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: "clearingHouseBase('/thesaurus/general/countries')", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "libraries": { title: "", type: 'term[]' },
  "title": { title: "Title of the legislative administrative or policy measures on access and benefit-sharing", type: 'lstring', mandatory: true, example: {"en":"Test title"} },
  "description": { title: "Brief description of the document including objective and scope (max. 300 words)", type: 'lstring', example: {"en":"<div><!--block-->Test description</div>"} },
  "type": { title: "Type of document/measure", titleLink: "clearingHouseBase('/thesaurus/measure/type-of-documents')", type: 'term', mandatory: true, example: {"identifier":"8165BF22-EEF0-4DF8-B3F2-8E0AEED13E2F"} },
  "jurisdiction": { title: "Area of jurisdiction", titleLink: "clearingHouseBase('/thesaurus/measure/jurisdictions')", type: 'term', mandatory: true, example: {"identifier":"7437F880-7B12-4F26-AA91-CED37250DD0A"} },
  "jurisdictionRegions": { title: "Country name(s) and/or Geographical or political/economic group(s)", type: 'term[]', example: {"identifier":"7437F880-7B12-4F26-AA91-CED37250DD0A"} },
  "jurisdictionName": { title: "Name of the sub-national / community / other jurisdiction", type: 'lstring', example: {"en":"Test information"} },
  "documents": { title: "Document text (in its original language)", type: 'link[]', mandatory: true, example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "documentTranslations": { title: "Translation in one of the official UN languages", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "status": { title: "Legal status of the measure", titleLink: "clearingHouseBase('/thesaurus/measure/statuses')", type: 'term', example: {"identifier":"97D6C7E6-5EAD-48B2-BD8D-DAB77153FF9C"} },
  "adoption": { title: "Please provide the date of adoption", type: 'string' },
  "entryIntoForce": { title: "Please provide the date of entry into force", type: 'string' },
  "retired": { title: "Please provide the date from which the measure was no longer applicable", type: 'string' },
  "limitedApplication": { title: "Indicate the date the measure is no longer in force if the measure has a limited application in time", type: 'string' },
  "amendedMeasures": { title: "List of amended measures", type: 'reference[]', example: [{"identifier":"26C9AAD9-3CAC-6FF4-C682-B9CA7858AE78@2"}] },
  "amendmentsDescription": { title: "Summary of the amendment(s)", type: 'lstring', example: {"en":"<div><!--block-->Test Information</div>"} },
  "linkedMeasures": { title: "Relationship with other measures", type: 'reference[]', example: [{"identifier":"A3722021-0CC0-B195-75BE-954F133FF78B@1"}] },
  "linkedMeasuresDescription": { title: "Please describe the relationship", type: 'lstring', example: {"en":"<div><!--block-->Test Information</div>"} },
  "authorities": { title: "Contact Institution", type: 'reference[]', mandatory: true, example: [{"identifier":"DECLARE-ORGANISATION_13674_20240902135135254@1"}] },
  "otherInformation": { title: "", type: 'lstring' },
  "otherDocuments": { title: "", type: 'link[]' },
  "relevantInformation": { title: "Any other relevant documents", type: 'lstring', example: {"en":"<div><!--block-->Test Information</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "absMeasures": { title: "Elements of the measure", type: 'object', mandatory: true, example: {"geneticResources":{"answer":true,"elements":[{"types":[{"identifier":"4E2974DF-216E-46C8-8797-8E3A33D6A048"},{"identifier":"9C146B09-097E-4CFF-B9CC-D4785496952F"},{"identifier":"357DBB22-6A6C-4C49-BA1F-037320B09247"},{"identifier":"http://data.gbif.org/species/13140807"},{"identifier":"33A6BF46-3699-4B5E-A3C0-506FAFDA2D76"},{"identifier":"F9EF6F94-8B39-4F08-BF68-B991157F2643"}]}]},"traditionalKnowledge":{"answer":true,"elements":[]}} },
  "absMesasureNotApplicable": { title: "Elements are not applicable for this measure", type: 'bool', example: false },
  "otherTypeName": { title: "Name of the other type of document/measure", type: 'lstring', example: {"en":"Test information"} },
  "isAmendment": { title: "Is this an amendment to previous legislative, administrative or policy measure?", type: 'bool', mandatory: true, example: true },
  "isModelContractualClause": { title: "Does the measure contain model contractual clauses?", type: 'bool', example: true },
  "modelContractualClauseDescription": { title: "Please provide further information", type: 'lstring', example: {"en":"Test information"} },
  "otherAbsMeasure": { title: "", type: 'lstring' }
  }
}

export default msr
