import type { SchemaDescriptor } from '../types'
import { cdiFields } from '../shared/cdi'

// The ABS Clearing-House identity of the `capacityBuildingInitiative` record type.
const cdi: SchemaDescriptor = {
  schema: 'capacityBuildingInitiative',
  name: "Capacity Development Initiative",
  description: "A Capacity Development Initiative record in the ABS Clearing-House.",
  fields: {
    ...cdiFields,
    // Always required in the ABS form (only conditionally in CHM and BCH).
    absKeyAreas: { ...cdiFields.absKeyAreas, mandatory: true }
  }
}

export default cdi
