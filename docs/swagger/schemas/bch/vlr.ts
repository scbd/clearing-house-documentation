import type { SchemaDescriptor } from '../types'
import { vlrFields } from '../shared/vlr'

// ABS-only fields (Nagoya Protocol key areas / code-of-conduct keywords): not in the BCH edit form.
const absOnly = ['nagoya.keyAreas', 'nagoya.mccKeywords']

// The Biosafety Clearing-House identity of the `resource` record type.
const vlr: SchemaDescriptor = {
  schema: 'resource',
  name: "Virtual Library Resource",
  description: "A Virtual Library Resource record in the Biosafety Clearing-House.",
  fields: {
    ...Object.fromEntries(Object.entries(vlrFields).filter(([k]) => !absOnly.includes(k))),
    // Required in the BCH form (the biosafety section is BCH-only).
    'biosafety.subjects': { ...vlrFields['biosafety.subjects'], mandatory: true },
    'biosafety.addressModifiedOrganisms': { ...vlrFields['biosafety.addressModifiedOrganisms'], mandatory: true },
    'biosafety.addressOrganisms': { ...vlrFields['biosafety.addressOrganisms'], mandatory: true },
    'biosafety.addressGenes': { ...vlrFields['biosafety.addressGenes'], mandatory: true }
  }
}

export default vlr
