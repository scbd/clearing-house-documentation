import type { SchemaDescriptor } from '../types'
import { vlrFields } from '../shared/vlr'

// The Clearing-House Mechanism identity of the `resource` record type.
// BCH-only (biosafety section), ABS-only (Nagoya key areas / MCC keywords) and system fields: not in the CHM form.
const notInChmForm = [
  'biosafety.addressModifiedOrganisms', 'biosafety.modifiedOrganisms', 'biosafety.addressOrganisms', 'biosafety.organisms',
  'biosafety.addressGenes', 'biosafety.genes', 'biosafety',
  'nagoya.keyAreas', 'nagoya.mccKeywords', 'tags', 'adminTags'
]

const vlr: SchemaDescriptor = {
  schema: 'resource',
  name: "Virtual Library Resource",
  description: "A Virtual Library Resource record in the Clearing-House Mechanism.",
  fields: {
    ...Object.fromEntries(Object.entries(vlrFields).filter(([k]) => !notInChmForm.includes(k))),
    // Only the CHM form requires CBD subject areas.
    cbdSubjects: { ...vlrFields.cbdSubjects, mandatory: true }
  }
}

export default vlr
