import type { Field } from '../types'

// Virtual Library Resource (resource) fields, from the single shared table the archive
// served to ABS Clearing-House, Biosafety Clearing-House, Clearing-House Mechanism. Per-app differences were never
// encoded there — review gate confirms. Untitled fields are untitled in the archive.
export const vlrFields: Record<string, Field> = {
  "title": { title: "Title", type: 'lstring', mandatory: true, example: {"en":"Test Title"} },
  "resourceTypes": { title: "Type of resource", type: 'term[]', mandatory: true, example: [{"identifier":"7BBF86FE-68E5-4ED8-8174-7DD8D302C583"},{"identifier":"AA04CE23-471C-40E4-A0CC-53C9F49DABD4"}] },
  "authors": { title: "Author name(s)", type: 'lstring', mandatory: true, example: {"en":"Test Author"} },
  "organizations": { title: "Reference to the authoring organization(s)", type: 'reference[]', mandatory: true, example: [{"identifier":"1767A775-F4F9-B597-41AC-CE56536F28F5@2"}] },
  "publisher": { title: "Publisher", type: 'lstring', example: {"en":"Test Publisher"} },
  "source": { title: "Source", type: 'lstring', example: {"en":"Test source"} },
  "publicationDate": { title: "Publication Date", type: 'lstring', mandatory: true },
  "rights": { title: "Rights", type: 'lstring', example: {"en":"Test rights"} },
  "resourceLinks": { title: "Link to the resource(s)", type: 'link[]', mandatory: true, example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "covers": { title: "Cover image(s)", type: 'link[]', example: [{"url":"/api/v2013/documents/38555401-8018-6255-B396-CB427060D564/attachments/616105/2738672-temp.jpg","name":"2738672-temp.jpg","tag":"Test Tags","language":"en"}] },
  "summary": { title: "Summary, abstract or table of contents (max 300 words)", type: 'lstring', mandatory: true, example: {"en":"Test Summary"} },
  "countryRegions": { title: "Geographical or political/economic group(s)", type: 'term[]', example: [{"identifier":"ao"},{"identifier":"A23DD6C0-44C5-418D-83B5-461D79D2721A"}] },
  "gbfTargets": { title: "Kunming-Montreal Global Biodiversity Framework Target(s)", type: 'term[]', example: [{"identifier":"GBF-TARGET-01"},{"identifier":"GBF-TARGET-17"}] },
  "aichiTargets": { title: "Aichi Targets", type: 'term[]' },
  "cbdSubjects": { title: "CBD Subject Areas", type: 'term[]', mandatory: true, example: [{"identifier":"CBD-SUBJECT-AGR"},{"identifier":"CBD-SUBJECT-CPB-HTPI"}] },
  "nagoya.mccKeywords": { title: "Please select the relevant keywords for describing the content of the code of conduct, guidelines, best practices, and/or standards being submitted", type: 'term[]' },
  "nagoya.subjects": { title: "ABS Thematic Areas", type: 'term[]', example: [{"identifier":"99FCE39007594FCD862564EC8D6E304F"}] },
  "nagoya.keyAreas": { title: "Key areas and strategic measures for capacity-building and development addressed by the resource", type: 'term[]', example: [{"identifier":"14E5882E-B433-4877-AA6B-B47F602C4BA6"}] },
  "nagoya": { title: "", type: 'object' },
  "biosafety.subjects": { title: "Biosafety Thematic Areas", type: 'term[]', example: [{"identifier":"E3E3E362-4E46-4C4A-A2A3-EABBDDAA2DEE"}] },
  "biosafety.addressModifiedOrganisms": { title: "Does this resource address one or more specific LMOs?", type: 'bool', example: true },
  "biosafety.modifiedOrganisms": { title: "LMO(s) identification", type: 'reference[]', example: [{"identifier":"E5DF7EF2-B902-9D55-517E-D400964CB478@8"}] },
  "biosafety.organisms": { title: "Organism(s) identification", type: 'reference[]', example: [{"identifier":"A4380B39-C757-301E-5C43-0F943B021A3C@1"}] },
  "biosafety.addressOrganisms": { title: "Does this resource address one or more specific organisms?", type: 'bool', example: true },
  "biosafety.addressGenes": { title: "Does this resource address one or more specific genetic elements?", type: 'bool', example: true },
  "biosafety.genes": { title: "Genetic element(s) identification", type: 'reference[]', example: [{"identifier":"FE2DAF79-6F81-4040-74C6-BA2057E0BB0C@3"}] },
  "biosafety": { title: "Biosafety", type: 'object', example: {"subjects":[{"identifier":"E3E3E362-4E46-4C4A-A2A3-EABBDDAA2DEE"}],"modifiedOrganisms":[{"identifier":"E5DF7EF2-B902-9D55-517E-D400964CB478@8"}],"organisms":[{"identifier":"A4380B39-C757-301E-5C43-0F943B021A3C@1"}],"genes":[{"identifier":"FE2DAF79-6F81-4040-74C6-BA2057E0BB0C@3"}],"addressModifiedOrganisms":true,"addressOrganisms":true,"addressGenes":true} },
  "tags": { title: "", type: 'lstring[]' },
  "adminTags": { title: "", type: 'string[]' },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
}
