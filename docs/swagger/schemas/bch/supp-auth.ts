import type { SchemaDescriptor } from '../types'
import { cnaFields } from '../shared/cna'

// The Biosafety Clearing-House identity of the `supplementaryAuthority` record type.
// In the C# definitions it inherits `EAuthorityBase` unchanged, so it takes the base-authority
// subset of the shared `authority` fields (the ABS-only and CNA-only additions are left out).
const baseKeys = [
  'government', 'name', 'websites', 'address', 'city', 'state', 'postalCode', 'country', 'phones', 'faxes',
  'emails', 'contacts', 'relevantInformation', 'relevantDocuments', 'responsibleForAll', 'responsibilities',
  'policyBasisForCompetency', 'policyBasisForCompetencyRef'
]

const suppAuth: SchemaDescriptor = {
  schema: 'supplementaryAuthority',
  name: "Supplementary Authority",
  description: "A Supplementary Authority record in the Biosafety Clearing-House.",
  fields: {
    // Shared fields without the CNA `mandatory` flags (unset pending review); CNA wording reworded below.
    ...Object.fromEntries(baseKeys.map((k) => [k, { ...cnaFields[k], mandatory: undefined }])),
    name: { ...cnaFields.name, title: "Name of the Supplementary Authority", mandatory: undefined },
    responsibleForAll: { ...cnaFields.responsibleForAll, title: "Is this the only designated supplementary authority in your country? If “no”, please describe the responsibilities of this supplementary authority.", mandatory: undefined },
    responsibilities: { ...cnaFields.responsibilities, title: "Short description of the supplementary authority's responsibilities (maximum 300 characters).", mandatory: undefined },
    policyBasisForCompetency: { ...cnaFields.policyBasisForCompetency, title: "If needed, provide additional information on the legal, administrative or policy basis for the competence of the supplementary authority.", mandatory: undefined }
  }
}

export default suppAuth
