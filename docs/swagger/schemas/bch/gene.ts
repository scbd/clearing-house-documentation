import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `dnaSequence` record type.
const gene: SchemaDescriptor = {
  schema: 'dnaSequence',
  name: "Gene / DNA Sequence",
  description: "A Gene / DNA Sequence record in the Biosafety Clearing-House.",
  fields: {
  "name": { title: "Name of genetic element", type: 'lstring', mandatory: true, example: {"en":"cry1Ab"} },
  "synonymNames": { title: "Alternate genetic element name(s) (synonym(s))", type: 'lstring[]', example: [{"en":"Cry1Ab gene"}] },
  "abbreviation": { title: "Abbreviation", type: 'lstring', mandatory: true, example: {"en":"cry1Ab"} },
  "family": { title: "Category", titleLink: '/thesaurus/dna-sequence-family', type: 'term', mandatory: true, example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "isSynthetic": { title: "Is the genetic element a synthetic molecule?", type: 'bool', mandatory: true, example: true },
  "donorOrganisms": { title: "Donor organism(s)", type: 'reference[]', example: [{"identifier":"50D6389D-5F07-2343-ABB1-E7CE26AFADCA@5"}] },
  "donorOrganismCollectionPoint": { title: "Point of collection or acquisition of the donor organism(s)", type: 'lstring', example: {"en":"<div>Isolated from a soil sample of Bacillus thuringiensis subsp. kurstaki</div>"} },
  "gisFiles": { title: "Geographic coordinates", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "proteinName": { title: "Name of the protein expressed by the coding sequence", type: 'lstring', example: {"en":"Cry1Ab delta-endotoxin"} },
  "biologicalFunction": { title: "Biological function of the protein", type: 'lstring', example: {"en":"Binds to receptors in the insect midgut, causing cell lysis and death of susceptible lepidopteran larvae."} },
  "traits": { title: "Related trait(s) or use(s) in biotechnology", type: 'term[]', example: [{"identifier":"5B6177DD-5E5E-434E-8CB7-D63D67D5EBED","customValue":{"en":"Resistance to lepidopteran insect pests"}},{"identifier":"81799D15-669E-4346-9AEC-6834893D2BE4"}] },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<div>The gene has been used in several commercial maize events.</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
  }
}

export default gene
