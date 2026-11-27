import type { SchemaDescriptor } from '../types'
import { organizationFields } from '../shared/org'

// The Biosafety Clearing-House identity of the `organization` record type.
// Where this app's schema differs from the shared base, add/override/remove
// fields below — the docs table and the playground spec both follow.
// CHM-only (thematicAreas, gbfTargets) and obsolete fields: not in the BCH edit form.
const notInBchForm = [
  'thematicAreas', 'gbfTargets', 'absThematicAreas', 'aichiTargets', 'coordinates',
  'establishmentGooglePlaceId', 'operationalLanguages', 'libraries'
]

const org: SchemaDescriptor = {
  schema: 'organization',
  name: 'Organization',
  description: 'An organization record in the Biosafety Clearing-House.',
  fields: {
    ...Object.fromEntries(Object.entries(organizationFields).filter(([k]) => !notInBchForm.includes(k))),
    // Required in the BCH form.
    profile: { ...organizationFields.profile, mandatory: true }
  }
}

export default org
