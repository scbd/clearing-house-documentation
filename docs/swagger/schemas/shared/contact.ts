import type { Field } from '../types'

// Contact fields common to all clearing houses. Apps compose these into their
// own descriptor (see swagger/schemas/<app>/contact.ts) and may add, remove or
// override fields where their schema differs.
export const contactFields: Record<string, Field> = {
  prefix: { title: 'Prefix', type: 'lstring', example: { en: 'Mr' } },
  firstName: { title: 'First Name', type: 'string', mandatory: true, example: 'John' },
  middleName: { title: 'Middle Name', type: 'string', example: 'Smith' },
  lastName: { title: 'Last Name', type: 'string', mandatory: true, example: 'Doe' },
  gender: { title: 'Gender', type: 'term' },
  designation: { title: 'Job Title', type: 'lstring', example: { en: 'Software' } },
  organization: { title: 'Organization', type: 'lstring', mandatory: true, example: { en: 'Test Organization' } },
  organizationAcronym: { title: 'Acronym', type: 'lstring', example: { en: 'CSBD' } },
  department: { title: 'Department / Division / Unit', type: 'lstring', example: { en: 'Division' } },
  organizationType: {
    title: 'Type of Organization',
    titleLink: '/thesaurus/organization-types',
    type: 'term',
    example: { identifier: '86D464C3-B5BB-4B02-85E4-1AAD8D64CD27' }
  },
  address: { title: 'Street Address', type: 'lstring', example: { en: '560 Franklin' } },
  city: { title: 'City', type: 'lstring', example: { en: 'Cambridge' } },
  state: { title: 'State or Province', type: 'lstring', example: { en: 'Ontario' } },
  postalCode: { title: 'Postal Code or Zip', type: 'lstring', example: { en: 'N1R 7Z1' } },
  country: { title: 'Country of Contact', titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: { identifier: 'ca' } },
  phones: { title: 'Phone Number(s)', type: 'string[]', example: ['54825578896'] },
  faxes: { title: 'Fax Number(s)', type: 'string[]', example: ['123456'] },
  emails: { title: 'Email(s)', type: 'string[]', mandatory: true, example: ['john.doe@example.com'] },
  websites: { title: 'Website Address(es)', type: 'link[]', example: [{ url: 'http://www.example.com' }] },
  addressType: { title: 'Address Type', type: 'string', example: 'organization' },
  relevantInformation: { title: 'Relevant Information', type: 'lstring' },
  relevantDocuments: { title: 'Relevant Documents', type: 'link[]' },
  type: { title: 'Contact Type', type: 'string', mandatory: true, example: 'person' },
  government: {
    title: 'Country',
    titleLink: '/thesaurus/countries',
    type: 'term',
    example: { identifier: 'af' }
  },
  contactOrganization: {
    title: 'Organization',
    type: 'reference',
    mandatory: true,
    example: { identifier: 'SIMP-22D52282-2FB2-AD2A-2965-476DFF6A7F37@1' }
  }
}
