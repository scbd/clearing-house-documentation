import type { Field } from '../types'

// National Website or Database (database) fields, from the single shared table the archive
// served to ABS Clearing-House, Biosafety Clearing-House. Per-app differences were never
// encoded there — review gate confirms. Untitled fields are untitled in the archive.
export const ndbFields: Record<string, Field> = {
  "government": { title: "Country", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "title": { title: "Website or database name", type: 'lstring', mandatory: true, example: {"en":"Test Info"} },
  "description": { title: "Description", type: 'lstring', mandatory: true, example: {"en":"<div><!--block-->Test Description</div>"} },
  "websites": { title: "Website address", type: 'link[]', mandatory: true, example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
}
