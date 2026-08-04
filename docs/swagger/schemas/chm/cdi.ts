import type { SchemaDescriptor } from '../types'
import { cdiFields } from '../shared/cdi'

// The Clearing-House Mechanism identity of the `capacityBuildingInitiative` record type.
const cdi: SchemaDescriptor = {
  schema: 'capacityBuildingInitiative',
  name: "Capacity Development Initiative",
  description: "A Capacity Development Initiative record in the Clearing-House Mechanism.",
  fields: {
    ...cdiFields
  }
}

export default cdi
