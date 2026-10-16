import type { SchemaDescriptor } from '../types'
import { vlrFields } from '../shared/vlr'

// The ABS Clearing-House identity of the `resource` record type.
const vlr: SchemaDescriptor = {
  schema: 'resource',
  name: "Virtual Library Resource",
  description: "A Virtual Library Resource record in the ABS Clearing-House.",
  fields: {
    ...vlrFields
  }
}

export default vlr
