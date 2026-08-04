import type { SchemaDescriptor } from '../types'
import { cnaFields } from '../shared/cna'

// The ABS Clearing-House identity of the `authority` record type.
const cna: SchemaDescriptor = {
  schema: 'authority',
  name: "Competent National Authority",
  description: "A Competent National Authority record in the ABS Clearing-House.",
  fields: {
    ...cnaFields
  }
}

export default cna
