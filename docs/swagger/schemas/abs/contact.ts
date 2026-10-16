import type { SchemaDescriptor } from '../types'
import { contactFields } from '../shared/contact'

// The ABS Clearing-House identity of the `contact` record type.
const contact: SchemaDescriptor = {
  schema: 'contact',
  name: 'Contact',
  description: 'A contact record in the ABS Clearing-House.',
  listFilterExample: "(type eq 'contact')",
  fields: {
    ...contactFields
    // Fields where the ABS schema differs from the shared base go here, e.g.:
    // someAbsOnlyField: { title: '…', type: 'lstring', mandatory: true, example: { en: '…' } },
  }
}

export default contact
