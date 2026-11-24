import type { SchemaDescriptor } from '../types'
import { organizationFields } from '../shared/org'

// The Clearing-House Mechanism identity of the `organization` record type.
// Where this app's schema differs from the shared base, add/override/remove
// fields below — the docs table and the playground spec both follow.
// BCH-only and obsolete fields: not in the CHM organization edit form.
const notInChmForm = [
  'areasOfWork', 'operationalRegions', 'profile', 'profileLink', 'linkedOrganizations', 'absThematicAreas', 'aichiTargets',
  'coordinates', 'establishmentGooglePlaceId', 'operationalLanguages', 'libraries'
]

const org: SchemaDescriptor = {
  schema: 'organization',
  name: 'Organization',
  description: 'An organization record in the Clearing-House Mechanism.',
  fields: {
    ...Object.fromEntries(Object.entries(organizationFields).filter(([k]) => !notInChmForm.includes(k))),
    // Required in the CHM form.
    gbfTargets: { ...organizationFields.gbfTargets, mandatory: true }
  }
}

export default org
