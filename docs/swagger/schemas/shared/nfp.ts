import type { Field } from '../types'

// National Focal Point (focalPoint) fields, from the single shared table the archive
// served to ABS Clearing-House, Biosafety Clearing-House. Per-app differences were never
// encoded there — review gate confirms. Untitled fields are untitled in the archive.
export const nfpFields: Record<string, Field> = {
  "government": { title: "", titleLink: '/thesaurus/dna-sequence-family', type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "categories": { title: "", type: 'string[]', example: ["Test Category"] },
  "description": { title: "", type: 'string' },
  "title": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "firstName": { title: "", type: 'string' },
  "middleName": { title: "", type: 'string' },
  "lastName": { title: "", type: 'string' },
  "gender": { title: "", titleLink: '/thesaurus/dna-sequence-family', type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "organization": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "organizationAcronym": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "organizationType": { title: "", titleLink: '/thesaurus/dna-sequence-family', type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "designation": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "department": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "addressLine1": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "addressLine2": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "city": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "state": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "postalCode": { title: "", type: 'lstring', example: {"en":"Test Information"} },
  "country": { title: "Country", titleLink: "clearingHouseBase('/thesaurus/general/countries')", type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "phones": { title: "", type: 'string[]', example: ["5437897410"] },
  "mobiles": { title: "", type: 'string[]', example: ["5437897410"] },
  "faxes": { title: "", type: 'string[]', example: ["5437897410"] },
  "emails": { title: "", type: 'string[]', example: ["test@email.com"] },
  "websites": { title: "", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
}
