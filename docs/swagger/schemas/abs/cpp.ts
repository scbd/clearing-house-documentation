import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `communityProtocol` record type.
const cpp: SchemaDescriptor = {
  schema: 'communityProtocol',
  name: "Community Protocol",
  description: "A Community Protocol record in the ABS Clearing-House.",
  fields: {
  "title": { title: "Title", type: 'lstring', mandatory: true, example: {"en":"Test Info"} },
  "resourceTypes": { title: "Type of resource", titleLink: '/thesaurus/type-of-documents', type: 'term[]', mandatory: true, example: [{"identifier":"2F193E6A-FE21-447F-8270-BAED8AD0DD5A"},{"identifier":"5DDFFC34-4278-42B3-83D6-449862EC1C16"}] },
  "authors": { title: "Author(s)", type: 'lstring', mandatory: true, example: {"en":"Test Info"} },
  "organizations": { title: "Reference to the authoring organization(s)", type: 'reference[]', mandatory: true, example: [{"identifier":"DECLARE-ORGANISATION_25562_20241111131557173@1"}] },
  "publisher": { title: "Publisher", type: 'lstring', example: {"en":"Test Info"} },
  "source": { title: "Source", type: 'lstring', example: {"en":"Test Info"} },
  "publicationDate": { title: "Publication Date", type: 'string', mandatory: true },
  "rights": { title: "Rights", type: 'lstring', example: {"en":"Test Info"} },
  "resourceLinks": { title: "Link to the resource(s)", type: 'link[]', mandatory: true, example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "covers": { title: "Cover image(s)", type: 'link[]', example: [{"url":"/api/v2013/documents/48478B9A-EF10-B9A3-008A-A1E149A078C4/attachments/616113/image.jpg","name":"image.jpg","tag":"Test Tag","language":"en"}] },
  "summary": { title: "Summary, abstract or table of contents (max 300 words)", type: 'lstring', mandatory: true, example: {"en":"Test Info"} },
  "countryRegions": { title: "Geographical or political/economic group(s)", titleLink: '/thesaurus/countries', type: 'term[]', example: [{"identifier":"af"},{"identifier":"A23DD6C0-44C5-418D-83B5-461D79D2721A"}] },
  "gbfTargets": { title: "", titleLink: '/thesaurus/gbf-targets', type: 'term[]', example: [{"identifier":"GBF-TARGET-01"}] },
  "aichiTargets": { title: "Aichi Targets", type: 'term[]' },
  "cbdSubjects": { title: "CBD Subject Areas", titleLink: '/thesaurus/cbd-subjects', type: 'term[]', example: [{"identifier":"CBD-SUBJECT-DSHL"},{"identifier":"CBD-SUBJECT-CC"}] },
  "nagoya": { title: "", type: 'object' },
  "nagoya.subjects": { title: "ABS Thematic Areas", type: 'term[]', mandatory: true },
  "nagoya.keyAreas": { title: "Key areas and strategic measures for capacity-building and development addressed by the resource", titleLink: '/thesaurus/key-areas', type: 'term[]', example: [{"identifier":"0DCF8438-9479-4F6B-B356-FDFCB0C4D564"}] },
  "nagoya.mccKeywords": { title: "\"Please select the relevant keywords for describing the content of the code of conduct, guidelines and best practices and/or standards being submitted", type: 'term[]' },
  "biosafety": { title: "", type: 'object' },
  "biosafety.subjects": { title: "Biosafety Thematic Areas", type: 'term[]' },
  "biosafety.raRecommend": { title: "", type: 'bool' },
  "biosafety.raAuthorAffiliation": { title: "", type: 'term[]' },
  "biosafety.raSubjects": { title: "", type: 'term[]' },
  "biosafety.addressModifiedOrganisms": { title: "Does this resource address one or more specific LMOs?", type: 'bool' },
  "biosafety.modifiedOrganisms": { title: "LMO(s) identification", type: 'reference[]' },
  "biosafety.addressOrganisms": { title: "Does this resource address one or more specific organisms?", type: 'bool' },
  "biosafety.organisms": { title: "Organism(s) identification", type: 'reference[]' },
  "biosafety.addressGenes": { title: "Does this resource address one or more specific genetic elements?", type: 'bool' },
  "biosafety.genes": { title: "Genetic element(s) identification", type: 'reference[]' },
  "tags": { title: "", type: 'lstring[]' },
  "adminTags": { title: "", type: 'string[]' },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
  }
}

export default cpp
