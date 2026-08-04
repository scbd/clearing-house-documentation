import type { SchemaDescriptor } from '../types'
import { ndbFields } from '../shared/ndb'

// The ABS Clearing-House identity of the `database` record type.
const ndb: SchemaDescriptor = {
  schema: 'database',
  name: "National Website or Database",
  description: "A National Website or Database record in the ABS Clearing-House.",
  fields: {
    ...ndbFields
  }
}

export default ndb
