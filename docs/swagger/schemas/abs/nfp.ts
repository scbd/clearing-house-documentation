import type { SchemaDescriptor } from '../types'
import { nfpFields } from '../shared/nfp'

// The ABS Clearing-House identity of the `focalPoint` record type.
const nfp: SchemaDescriptor = {
  schema: 'focalPoint',
  name: "National Focal Point",
  description: "A National Focal Point record in the ABS Clearing-House.",
  fields: {
    ...nfpFields
  }
}

export default nfp
