import type { SchemaDescriptor } from '../types'
import { vlrFields } from '../shared/vlr'

// The ABS Clearing-House identity of the `resource` record type.
// BCH-only (biosafety section), MCC-only (`nagoya.mccKeywords`) and system fields: not in the ABS resource edit form.
const notInAbsForm = [
  'biosafety.addressModifiedOrganisms', 'biosafety.modifiedOrganisms', 'biosafety.addressOrganisms', 'biosafety.organisms',
  'biosafety.addressGenes', 'biosafety.genes', 'biosafety',
  'nagoya.mccKeywords', 'tags', 'adminTags'
]

const vlr: SchemaDescriptor = {
  schema: 'resource',
  name: "Virtual Library Resource",
  description: "A Virtual Library Resource record in the ABS Clearing-House.",
  fields: {
    ...Object.fromEntries(Object.entries(vlrFields).filter(([k]) => !notInAbsForm.includes(k))),
    // Always required in the ABS form.
    'nagoya.subjects': { ...vlrFields['nagoya.subjects'], mandatory: true }
  }
}

export default vlr
