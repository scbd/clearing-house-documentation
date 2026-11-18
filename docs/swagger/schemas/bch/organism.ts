import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `organism` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const str = (title: string, example: string): { title: string; type: 'string'; example: string } => ({ title, type: 'string', example })

const organism: SchemaDescriptor = {
  schema: 'organism',
  name: "Organism",
  description: "An Organism record in the Biosafety Clearing-House.",
  fields: {
  "commonNames": { title: "Common names", type: 'lstring[]', example: [{"en":"Maize"}] },
  "scientificName": str("Scientific name", "Zea mays"),
  "scientificNameSynonyms": { title: "Scientific name synonyms", type: 'string[]', example: ["Zea mays subsp. mays"] },
  "realm": str("Realm", "Eukaryota"),
  "subRealm": str("Sub-realm", "Eukaryota"),
  "kingdom": str("Kingdom", "Plantae"),
  "phylum": str("Phylum", "Tracheophyta"),
  "_class": str("Class", "Liliopsida"),
  "order": str("Order", "Poales"),
  "subOrder": str("Sub-order", "Poineae"),
  "family": str("Family", "Poaceae"),
  "subFamily": str("Sub-family", "Panicoideae"),
  "genus": str("Genus", "Zea"),
  "species": str("Species", "mays"),
  "subSpecies": str("Sub-species", "mays"),
  "plantCultivar": str("Plant cultivar", "Golden Bantam"),
  "microorganismStrain": str("Microorganism strain", "K-12"),
  "bacteriaPathovar": str("Bacteria pathovar", "pv. syringae"),
  "virusGroup": str("Virus group", "Group IV (positive-sense ssRNA)"),
  "taxonomicClassification": { title: "Taxonomic classification", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "organismType": { title: "Organism type", type: 'term', example: {"identifier":"8DAB2400-CF00-44B2-ADCF-49AABF66B9B0"} },
  "domestication": { title: "Domestication", type: 'term', example: {"identifier":"B89720B8-81BF-4A6B-8084-8D464403C25A"} },
  "originCentre": { title: "Centre of origin", type: 'lstring', example: {"en":"Mesoamerica (southern Mexico and Central America)"} },
  "diversityCentre": { title: "Centre of diversity", type: 'lstring', example: {"en":"Mexico and Guatemala, with high genetic diversity of landraces"} },
  "habitat": { title: "Habitat", type: 'lstring', example: {"en":"Temperate grasslands and cultivated agricultural land"} },
  "geographicalDistribution": { title: "Geographical distribution", type: 'lstring', example: {"en":"Cultivated worldwide in temperate, subtropical and tropical regions"} },
  "pathogenicity": { title: "Pathogenicity", type: 'lstring', example: {"en":"Not known to be pathogenic to humans or animals; susceptible to a number of fungal and viral plant diseases."} },
  "compatibleSpecies": { title: "Compatible species", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "commonUses": { title: "Common uses", type: 'term[]' },
  "relevantInformation": { title: "Relevant information", type: 'lstring', example: {"en":"Further details are available from the national focal point on request."} },
  "relevantDocuments": { title: "Relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default organism
