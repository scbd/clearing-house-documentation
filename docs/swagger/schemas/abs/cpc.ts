import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `absCheckpointCommunique` record type.
const cpc: SchemaDescriptor = {
  schema: 'absCheckpointCommunique',
  name: "Checkpoint Communique",
  description: "A Checkpoint Communique record in the ABS Clearing-House.",
  listFilterExample: "(type eq 'absCheckpointCommunique')",
  fields: {
  "title": { title: "Title of this checkpoint communique", type: 'lstring', mandatory: true, example: {"en":"Test Title"} },
  "government": { title: "Country issuing this checkpoint communique", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "absIRCCs": { title: "Links to internationally recognized certificate(s) of compliance (IRCC) that relate to this communique", type: 'reference[]', mandatory: true, example: [{"identifier":"CB51626B-CF45-2AA0-3A24-459669DDCC34@1"}] },
  "absCheckpoints": { title: "Checkpoint/s that collected or received the information", type: 'reference[]', mandatory: true, example: [{"identifier":"3E387C20-E70C-997B-EABB-BC4C9A1E142F@1"}] },
  "absIRCCsNotAvailable": { title: "The internationally recognized certificate of compliance (IRCC) is not available", type: 'bool', example: true },
  "sourceCountries": { title: "Source of the genetic resource", type: 'term[]', example: [{"identifier":"af"}] },
  "entityWhoGrantedPIC": { title: "Person or entity who granted prior informed consent (PIC)", type: 'reference', example: {"identifier":"DECLARE-ORGANISATION_19584_20241007134350919@1"} },
  "subjectMatter": { title: "Subject-matter or genetic resources relevant to the information collected or received", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "specimens": { title: "Specimen data", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "taxonomies": { title: "Taxonomy", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "gisFiles": { title: "Geographic coordinates", type: 'link[]', example: [{"url":"/api/v2013/documents/63B9CA56-9D43-E877-2A96-2C95986522D5/attachments/615856/test.json","name":"test.json","tag":"Test Tag","language":"en"}] },
  "gisMapCenter": { title: "", type: 'mapLocation' },
  "personsAtCheckpoint": { title: "Person or entity making information available to the checkpoint on the utilization of the genetic resource", type: 'reference[]', example: [{"identifier":"DECLARE-ORGANISATION_19584_20241007134350919@1"}] },
  "evidenceOfPIC": { title: "Reference or evidence of prior informed consent (PIC)", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "evidenceOfMAT": { title: "Reference or evidence of establishment of mutually agreed terms (MAT)", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "entityToWhomPICGranted": { title: "Person or entity to whom prior informed consent (PIC) was granted", type: 'reference', example: {"identifier":"DECLARE-ORGANISATION_19584_20241007134350919@1"} },
  "description": { title: "Short description of the information collected or received by the checkpoint relevant to the utilization of genetic resources, including the type of use", type: 'lstring', mandatory: true, example: {"en":"<div><!--block-->Test Info</div>"} },
  "dateOfAccess": { title: "Date of access to the genetic resources", type: 'datetime' },
  "dateCollected": { title: "Date on which the information was collected or received at the checkpoint", type: 'datetime' },
  "dateCollectedFrom": { title: "FROM", type: 'datetime' },
  "dateCollectedTo": { title: "TO", type: 'datetime' },
  "relevantInformation": { title: "Additional Information", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "relevantDocuments": { title: "Other relevant website addresses and/or attached documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "keywords": { title: "Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent", type: 'term[]', example: [{"identifier":"term-id-1"},{"identifier":"term-id-2"}] },
  "keywordOther": { title: "Other keywords", type: 'lstring', example: {"en":"Test Keywords"} }
  }
}

export default cpc
