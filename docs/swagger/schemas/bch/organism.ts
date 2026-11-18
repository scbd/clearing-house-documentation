import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `organism` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const str = (title: string, example = "Test"): { title: string; type: 'string'; example: string } => ({ title, type: 'string', example })

const organism: SchemaDescriptor = {
  schema: 'organism',
  name: "Organism",
  description: "An Organism record in the Biosafety Clearing-House.",
  fields: {
  "commonNames": { title: "Common names", type: 'lstring[]', example: [{"en":"Test name"}] },
  "scientificName": str("Scientific name"),
  "scientificNameSynonyms": { title: "Scientific name synonyms", type: 'string[]', example: ["Test"] },
  "realm": str("Realm"),
  "subRealm": str("Sub-realm"),
  "kingdom": str("Kingdom"),
  "phylum": str("Phylum"),
  "_class": str("Class"),
  "order": str("Order"),
  "subOrder": str("Sub-order"),
  "family": str("Family"),
  "subFamily": str("Sub-family"),
  "genus": str("Genus"),
  "species": str("Species"),
  "subSpecies": str("Sub-species"),
  "plantCultivar": str("Plant cultivar"),
  "microorganismStrain": str("Microorganism strain"),
  "bacteriaPathovar": str("Bacteria pathovar"),
  "virusGroup": str("Virus group"),
  "taxonomicClassification": { title: "Taxonomic classification", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "organismType": { title: "Organism type", type: 'term', example: {"identifier":"8DAB2400-CF00-44B2-ADCF-49AABF66B9B0"} },
  "domestication": { title: "Domestication", type: 'term', example: {"identifier":"B89720B8-81BF-4A6B-8084-8D464403C25A"} },
  "originCentre": { title: "Centre of origin", type: 'lstring', example: {"en":"Test information"} },
  "diversityCentre": { title: "Centre of diversity", type: 'lstring', example: {"en":"Test information"} },
  "habitat": { title: "Habitat", type: 'lstring', example: {"en":"Test information"} },
  "geographicalDistribution": { title: "Geographical distribution", type: 'lstring', example: {"en":"Test information"} },
  "pathogenicity": { title: "Pathogenicity", type: 'lstring', example: {"en":"Test information"} },
  "compatibleSpecies": { title: "Compatible species", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "commonUses": { title: "Common uses", type: 'term[]' },
  "relevantInformation": { title: "Relevant information", type: 'lstring', example: {"en":"Test information"} },
  "relevantDocuments": { title: "Relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Test notes" }
  }
}

export default organism
