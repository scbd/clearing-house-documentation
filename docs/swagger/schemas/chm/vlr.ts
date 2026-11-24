import type { SchemaDescriptor } from '../types'
import { vlrFields } from '../shared/vlr'

// The Clearing-House Mechanism identity of the `resource` record type.
const vlr: SchemaDescriptor = {
  schema: 'resource',
  name: "Virtual Library Resource",
  description: "A Virtual Library Resource record in the Clearing-House Mechanism.",
  fields: {
    ...vlrFields,
    // Only the CHM form requires CBD subject areas.
    cbdSubjects: { ...vlrFields.cbdSubjects, mandatory: true }
  }
}

export default vlr
