import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `laboratoryDetection` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
const lab: SchemaDescriptor = {
  schema: 'laboratoryDetection',
  name: "Laboratory Detection",
  description: "A Laboratory Detection record in the Biosafety Clearing-House.",
  fields: {
  "organization": { title: "Organization", type: 'reference', example: {"identifier":"04139A35-1F8B-FC94-45D6-4F3AD7675685@1"} },
  "relatedOrganization": { title: "Related organization", type: 'reference', example: {"identifier":"04139A35-1F8B-FC94-45D6-4F3AD7675685@1"} },
  "services": { title: "Services", type: 'term[]', example: [{"identifier":"DE2D1321-AD01-4C49-8D48-E7BD4EA14226"}] },
  "agreements": { title: "Agreements", type: 'lstring', example: {"en":"Memorandum of understanding with the national agricultural research institute for joint LMO detection work."} },
  "agreementLinks": { title: "Agreement links", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "certifications": { title: "Certifications", type: 'lstring', example: {"en":"Accredited under ISO/IEC 17025 for the detection of genetically modified maize and soybean."} },
  "detectionMethods": { title: "Detection methods", type: 'term[]', example: [{"identifier":"81EE782D-810C-4107-8E8F-F7A6EE4CD1B5"}] },
  "lmoTypes": { title: "LMO types", type: 'term[]', example: [{"identifier":"8DAB2400-CF00-44B2-ADCF-49AABF66B9B0"}] },
  "detectableLmos": { title: "Detectable LMOs", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "detectableGenes": { title: "Detectable genes", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "relevantInformation": { title: "Relevant information", type: 'lstring', example: {"en":"Further details are available from the national focal point on request."} },
  "relevantDocuments": { title: "Relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default lab
