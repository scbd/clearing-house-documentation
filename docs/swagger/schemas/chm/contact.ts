import type { SchemaDescriptor } from '../types'
import { contactFields } from '../shared/contact'

// The Clearing-House Mechanism identity of the `contact` record type.
// Where the CHM schema differs from the shared base, add/override/remove
// fields below — the docs table and the playground spec both follow.
const contact: SchemaDescriptor = {
  schema: 'contact',
  name: 'Contact',
  description: 'A contact record in the Clearing-House Mechanism.',
  listFilterExample: "(type eq 'contact')",
  fields: {
    ...contactFields
    // Example of overriding a shared field for this app only:
    // organization: { ...contactFields.organization, mandatory: false },
  }
}

export default contact
