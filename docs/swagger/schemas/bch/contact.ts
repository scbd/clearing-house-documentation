import type { SchemaDescriptor } from '../types'
import { contactFields } from '../shared/contact'

// The Biosafety Clearing-House identity of the `contact` record type.
// Where the BCH schema differs from the shared base, add/override/remove
// fields below — the docs table and the playground spec both follow.
const contact: SchemaDescriptor = {
  schema: 'contact',
  name: 'Contact',
  description: 'A contact record in the Biosafety Clearing-House.',
  fields: {
    ...contactFields
    // Example of overriding a shared field for this app only:
    // organization: { ...contactFields.organization, mandatory: false },
  }
}

export default contact
