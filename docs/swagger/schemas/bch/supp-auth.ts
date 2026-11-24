import type { SchemaDescriptor } from '../types'
import { cnaFields } from '../shared/cna'

// The Biosafety Clearing-House identity of the `supplementaryAuthority` record type.
// In the C# definitions it inherits `EAuthorityBase`; the BCH edit form (SPCA mode, absch.cbd.int)
// shows the base-authority subset of the shared `authority` fields, without the ABS-only
// `policyBasisForCompetency*`. Titles and `mandatory` below follow that form, which calls it
// "Competent Authority". `responsibilities` is only required when `responsibleForAll` is false,
// so it carries no `mandatory` flag.
const baseKeys = [
  'government', 'name', 'websites', 'address', 'city', 'state', 'postalCode', 'country', 'phones', 'faxes',
  'emails', 'contacts', 'relevantInformation', 'relevantDocuments', 'responsibleForAll', 'responsibilities'
]
const required = ['government', 'name', 'city', 'country', 'phones', 'emails', 'responsibleForAll']

const suppAuth: SchemaDescriptor = {
  schema: 'supplementaryAuthority',
  name: "Supplementary Authority",
  description: "A Supplementary Authority record in the Biosafety Clearing-House.",
  fields: {
    ...Object.fromEntries(baseKeys.map((k) => [k, { ...cnaFields[k], mandatory: required.includes(k) ? true : undefined }])),
    name: { ...cnaFields.name, title: "Name of the Competent Authority", mandatory: true },
    responsibleForAll: { ...cnaFields.responsibleForAll, title: "Is this the only designated competent authority for the Supplementary Protocol in your country?", mandatory: true },
    responsibilities: { ...cnaFields.responsibilities, title: "Short description of the responsibilities of the Competent Authority (maximum 300 characters).", mandatory: undefined },
    notes: { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default suppAuth
