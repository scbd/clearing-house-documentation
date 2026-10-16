import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `absCheckpoint` record type.
const cp: SchemaDescriptor = {
  schema: 'absCheckpoint',
  name: "Checkpoint",
  description: "A Checkpoint record in the ABS Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"us"} },
  "name": { title: "Name of the checkpoint", type: 'lstring', mandatory: true, example: {"en":"Test Checkpoint"} },
  "responsibilities": { title: "Short description of any additional responsibilities (maximum 300 characters)", type: 'lstring', mandatory: true, example: {"en":"<div><!--block-->Test description</div>"} },
  "jurisdiction": { title: "Area of jurisdiction:", titleLink: '/thesaurus/cp-jurisdiction', type: 'term', example: {"identifier":"7437F880-7B12-4F26-AA91-CED37250DD0A"} },
  "jurisdictionName": { title: "Name of the sub-national jurisdiction", type: 'lstring', example: {"en":"Test Sub jurisdiction"} },
  "informAllAuthorities": { title: "Send a copy of the communiqué to all competent national authorities within my country", type: 'bool', mandatory: true, example: true },
  "contactsToInform": { title: "Please select any national authorities whom you wish to send a copy of the communiqué", type: 'reference[]', example: [{"identifier":"DECLARE-ORGANISATION_13394_20240830135408832@1"}] },
  "relevantInformation": { title: "Additional Information", type: 'lstring', example: {"en":"<div><!--block-->Test Information</div>"} },
  "relevantDocuments": { title: "Other relevant website addresses and/or attached documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
  }
}

export default cp
