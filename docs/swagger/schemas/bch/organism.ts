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
  "commonNames": { title: "Common name(s)", type: 'lstring[]', example: [{"en":"Maize"}] },
  "scientificName": { ...str("Scientific name", "Zea mays"), mandatory: true },
  "scientificNameSynonyms": { title: "Alternate scientific name(s) (synonym(s))", type: 'string[]', example: ["Zea mays subsp. mays"] },
  "realm": str("Realm", "Eukaryota"),
  "subRealm": str("Subrealm", "Eukaryota"),
  "kingdom": str("Kingdom", "Plantae"),
  "phylum": str("Phylum", "Tracheophyta"),
  "_class": str("Class", "Liliopsida"),
  "order": str("Order", "Poales"),
  "subOrder": str("Suborder", "Poineae"),
  "family": str("Family", "Poaceae"),
  "subFamily": str("Subfamily", "Panicoideae"),
  "genus": str("Genus", "Zea"),
  "species": str("Species", "mays"),
  "subSpecies": str("Sub-species", "mays"),
  "plantCultivar": str("Cultivar / variety (plants)", "Golden Bantam"),
  "microorganismStrain": str("Strain / isolate / serotype (microorganisms)", "K-12"),
  "bacteriaPathovar": str("Pathovar (bacteria)", "pv. syringae"),
  "virusGroup": str("Group (virus)", "Group IV (positive-sense ssRNA)"),
  "taxonomicClassification": { title: "Additional taxonomic classification information", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "organismType": { title: "Type of organism", type: 'term', example: {"identifier":"8DAB2400-CF00-44B2-ADCF-49AABF66B9B0"} },
  "domestication": { title: "Domestication", type: 'term', example: {"identifier":"B89720B8-81BF-4A6B-8084-8D464403C25A"} },
  "originCentre": { title: "Centre(s) of origin", type: 'lstring', example: {"en":"Mesoamerica (southern Mexico and Central America)"} },
  "diversityCentre": { title: "Centre(s) of genetic diversity", type: 'lstring', example: {"en":"Mexico and Guatemala, with high genetic diversity of landraces"} },
  "habitat": { title: "Habitat range", type: 'lstring', example: {"en":"Temperate grasslands and cultivated agricultural land"} },
  "geographicalDistribution": { title: "Geographical distribution", type: 'lstring', example: {"en":"Cultivated worldwide in temperate, subtropical and tropical regions"} },
  "pathogenicity": { title: "Known pathogenicity and/or allergenicity", type: 'lstring', example: {"en":"Not known to be pathogenic to humans or animals; susceptible to a number of fungal and viral plant diseases."} },
  "compatibleSpecies": { title: "Cross-compatible species", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "commonUses": { title: "Common use(s)", type: 'term[]' },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"Further details are available from the national focal point on request."} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default organism
