import type { Field } from '../types'

// Competent National Authority (authority) fields, from the single shared table the archive
// served to ABS Clearing-House, Biosafety Clearing-House. Per-app differences were never
// encoded there — review gate confirms. Untitled fields are untitled in the archive.
export const cnaFields: Record<string, Field> = {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: {"identifier":"af"} },
  "name": { title: "Name of the Competent National Authority", type: 'lstring', mandatory: true, example: {"en":"your name"} },
  "websites": { title: "Website address(es)", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "address": { title: "Address", type: 'lstring', example: {"en":"650 Franklin Blvd"} },
  "city": { title: "City", type: 'lstring', mandatory: true, example: {"en":"Cambridge"} },
  "state": { title: "State or Province", type: 'lstring', example: {"en":"Ontario"} },
  "postalCode": { title: "Postal Code or Zip", type: 'lstring', example: {"en":"N3h0E2"} },
  "country": { title: "Country of Contact", titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: {"identifier":"ca"} },
  "phones": { title: "Phone number(s)", type: 'string[]', mandatory: true, example: ["5487899632"] },
  "faxes": { title: "Fax number(s)", type: 'string[]', example: ["5487899632"] },
  "emails": { title: "Email(s)", type: 'string[]', mandatory: true, example: ["email@cbd.int"] },
  "contacts": { title: "Contact person", type: 'reference[]', example: [{"identifier":"SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1"}] },
  "relevantInformation": { title: "Additional Information", type: 'lstring', example: {"en":"<div><!--block-->asdfasdf</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "responsibleForAll": { title: "Is this the only designated competent national authority (CNA) in your country? If “no”, please describe the responsibilities of this competent national authority (CNA).", type: 'bool', mandatory: true },
  "responsibilities": { title: "Short description of CNA responsibilities (maximum 300 characters).", type: 'lstring', mandatory: true, example: {"en":"<div><!--block-->asdfasdf</div>"} },
  "policyBasisForCompetency": { title: "If needed, provide additional information on the legal, administrative or policy basis for the competence of the CNA.", type: 'lstring', example: {"en":"<div><!--block-->asdfasdf</div>"} },
  "policyBasisForCompetencyRef": { title: "Provide a link to any relevant legal, administrative or policy measures.", type: 'reference[]', example: [{"identifier":"A3722021-0CC0-B195-75BE-954F133FF78B@1"}] },
  "absResponsibleForAll": { title: "", type: 'bool' },
  "absPolicyBasisForCompetency": { title: "", type: 'lstring' },
  "absPolicyBasisForCompetencyRef": { title: "", type: 'reference[]' },
  "absJurisdiction": { title: "Area of jurisdiction for granting access to genetic resources", type: 'term[]', mandatory: true, example: [{"identifier":"7437F880-7B12-4F26-AA91-CED37250DD0A"}] },
  "absJurisdictionName": { title: "Name of the jurisdiction(s)", type: 'lstring' },
  "absGeneticResourceTypes": { title: "Keywords to describe scope of CNA responsibilities", type: 'term[]', example: [{"identifier":"357DBB22-6A6C-4C49-BA1F-037320B09247"}] },
  "absGeneticResourceAreas": { title: "", type: 'term[]' },
  "functions": { title: "Administrative functions", type: 'term[]' },
  "cpbOrganismTypes": { title: "Types of organism(s) under its responsibility", type: 'term[]' },
  "libraries": { title: "", type: 'term[]' }
}
