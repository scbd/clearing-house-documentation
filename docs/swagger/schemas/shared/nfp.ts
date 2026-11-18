import type { Field } from '../types'

// National Focal Point (focalPoint) fields, from the single shared table the archive
// served to ABS Clearing-House, Biosafety Clearing-House. Per-app differences were never
// encoded there — review gate confirms. Untitled fields are untitled in the archive.
export const nfpFields: Record<string, Field> = {
  "government": { title: "", type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "categories": { title: "", type: 'string[]', example: ["Focal Point"] },
  "description": { title: "", type: 'string' },
  "title": { title: "", type: 'lstring', example: {"en":"Dr."} },
  "firstName": { title: "", type: 'string' },
  "middleName": { title: "", type: 'string' },
  "lastName": { title: "", type: 'string' },
  "gender": { title: "", type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "organization": { title: "", type: 'lstring', example: {"en":"Ministry of Environment"} },
  "organizationAcronym": { title: "", type: 'lstring', example: {"en":"MOE"} },
  "organizationType": { title: "", type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "designation": { title: "", type: 'lstring', example: {"en":"National Focal Point"} },
  "department": { title: "", type: 'lstring', example: {"en":"Biodiversity Department"} },
  "addressLine1": { title: "", type: 'lstring', example: {"en":"123 Main Street"} },
  "addressLine2": { title: "", type: 'lstring', example: {"en":"Building B, Suite 400"} },
  "city": { title: "", type: 'lstring', example: {"en":"Ottawa"} },
  "state": { title: "", type: 'lstring', example: {"en":"Ontario"} },
  "postalCode": { title: "", type: 'lstring', example: {"en":"K1A 0A1"} },
  "country": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"1ECB698D-3F3D-41BC-BEBD-DD5C734BCDCF"} },
  "phones": { title: "", type: 'string[]', example: ["5437897410"] },
  "mobiles": { title: "", type: 'string[]', example: ["5437897410"] },
  "faxes": { title: "", type: 'string[]', example: ["5437897410"] },
  "emails": { title: "", type: 'string[]', example: ["focal.point@example.org"] },
  "websites": { title: "", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
}
