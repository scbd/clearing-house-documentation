import type { SchemaDescriptor } from '../types'
import { cdiFields } from '../shared/cdi'

// The ABS Clearing-House identity of the `capacityBuildingInitiative` record type.
const cdi: SchemaDescriptor = {
  schema: 'capacityBuildingInitiative',
  name: "Capacity Development Initiative",
  description: "A Capacity Development Initiative record in the ABS Clearing-House.",
  fields: {
    ...cdiFields
  }
}

export default cdi
