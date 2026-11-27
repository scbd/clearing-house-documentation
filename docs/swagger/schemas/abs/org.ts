import type { SchemaDescriptor } from '../types'
import { organizationFields } from '../shared/org'

// The ABS Clearing-House identity of the `organization` record type.
// Where this app's schema differs from the shared base, add/override/remove
// fields below — the docs table and the playground spec both follow.
// BCH-only, CHM-only and obsolete fields: not in the ABS organization edit form.
const notInAbsForm = [
  'areasOfWork', 'operationalRegions', 'profile', 'profileLink', 'linkedOrganizations', 'absThematicAreas', 'aichiTargets',
  'coordinates', 'establishmentGooglePlaceId', 'operationalLanguages', 'libraries',
  'thematicAreas', 'gbfTargets'
]

const org: SchemaDescriptor = {
  schema: 'organization',
  name: 'Organization',
  description: 'An organization record in the ABS Clearing-House.',
  fields: {
    ...Object.fromEntries(Object.entries(organizationFields).filter(([k]) => !notInAbsForm.includes(k)))
  }
}

export default org
