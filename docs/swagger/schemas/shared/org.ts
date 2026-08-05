import type { Field } from '../types'

// Organization fields common to all clearing houses, drafted from the single
// shared table the archive served to ABS, BCH and CHM alike (per-app
// differences, if any, were never encoded there — review gate to confirm).
// Untitled fields are untitled in the archive too.
export const organizationFields: Record<string, Field> = {
  acronym: { title: 'Acronym', type: 'lstring', example: { en: 'TestINFO' } },
  name: { title: 'Name of the organization', type: 'lstring', mandatory: true, example: { en: 'Test Info' } },
  contacts: {
    title: 'Contact person(s)',
    type: 'reference[]',
    example: [{ identifier: 'SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1' }]
  },
  linkedOrganizations: {
    title: 'Linked organizations',
    type: 'reference[]',
    example: [{ identifier: '1767A775-F4F9-B597-41AC-CE56536F28F5@2' }]
  },
  address: { title: 'Address', type: 'lstring', example: { en: 'Test Info' } },
  city: { title: 'City', type: 'lstring', mandatory: true, example: { en: 'Test Info' } },
  state: { title: 'State or Province', type: 'lstring', example: { en: 'Test Info' } },
  postalCode: { title: 'Postal Code or Zip', type: 'lstring', example: { en: 'TestINFO' } },
  country: { title: 'Country', type: 'term', mandatory: true, example: { identifier: 'af' } },
  phones: { title: 'Phone number(s)', type: 'string[]', mandatory: true, example: ['1234561234'] },
  faxes: { title: 'Fax number(s)', type: 'string[]', example: ['1234561234'] },
  emails: { title: 'Email(s)', type: 'string[]', mandatory: true, example: ['test@email.com'] },
  websites: {
    title: 'Website address(es)',
    type: 'link[]',
    example: [{ url: 'https://www.example.com', name: 'Example' }]
  },
  libraries: { title: '', type: 'term[]' },
  organizationType: {
    title: 'Type of organization',
    titleLink: '/thesaurus/organization-types',
    type: 'term',
    mandatory: true,
    example: { identifier: '86D464C3-B5BB-4B02-85E4-1AAD8D64CD27' }
  },
  thematicAreas: { title: '', type: 'term[]' },
  absThematicAreas: { title: '', type: 'term[]' },
  areasOfWork: { title: 'Areas of work', type: 'lstring[]', example: [{ en: 'Test Info' }] },
  gbfTargets: { title: '', type: 'term[]' },
  aichiTargets: { title: '', type: 'term[]' },
  coordinates: { title: '', type: 'mapLocation' },
  establishmentGooglePlaceId: { title: '', type: 'string[]' },
  operationalLanguages: { title: '', type: 'term[]' },
  operationalRegions: {
    title: 'Regional area(s) of operations or political/economic group(s)',
    type: 'term[]',
    example: [{ identifier: 'CCA4B662-8EF4-418D-B327-0D6F418AA703' }]
  },
  profile: { title: 'Organization’s profile', type: 'lstring', example: { en: 'Test Info' } },
  profileLink: { title: '', type: 'link[]' },
  relevantInformation: { title: 'Any other relevant information', type: 'lstring', example: { en: 'Test Info' } },
  relevantDocuments: {
    title: 'Any other relevant documents',
    type: 'link[]',
    example: [{ url: 'https://www.example.com', name: 'Example' }]
  }
}
