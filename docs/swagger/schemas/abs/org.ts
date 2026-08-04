import type { SchemaDescriptor } from '../types'
import { organizationFields } from '../shared/org'

// The ABS Clearing-House identity of the `organization` record type.
// Where this app's schema differs from the shared base, add/override/remove
// fields below — the docs table and the playground spec both follow.
const org: SchemaDescriptor = {
  schema: 'organization',
  name: 'Organization',
  description: 'An organization record in the ABS Clearing-House.',
  fields: {
    ...organizationFields
  }
}

export default org
