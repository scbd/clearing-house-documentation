import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `biosafetyExpert` record type.
// Drafted from the C# schema definitions (api-examples/schema-definitions); titles are
// humanized from field names and mandatory flags are unset — both pending review.
// `currentEmployment`/`previousEmployment`/`*Education` are composite types, rendered as `object`.
const expert: SchemaDescriptor = {
  schema: 'biosafetyExpert',
  name: "Biosafety Expert",
  description: "A Biosafety Expert record in the Biosafety Clearing-House.",
  fields: {
  "nominationTypes": { title: "Nomination types (obsolete)", type: 'term[]' },
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"af"} },
  "profile": { title: "Profile", type: 'lstring', example: {"en":"Biosafety specialist with more than ten years of experience in risk assessment and regulatory oversight of living modified organisms."} },
  "contact": { title: "Contact", type: 'reference', example: {"identifier":"3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1"} },
  "birthYear": { title: "Year of birth", type: 'int', example: 1980 },
  "birthCountry": { title: "Country of birth", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"af"} },
  "birthPlace": { title: "Place of birth (obsolete)", type: 'lstring' },
  "nationalities": { title: "Nationalities", type: 'term[]' },
  "currentEmployment": { title: "Current employment", type: 'object', example: {"name":{"en":"National Biosafety Authority"},"title":{"en":"Senior Biosafety Officer"},"department":{"en":"Department of Environmental Protection"},"designation":{"en":"Head of Risk Assessment"},"startDate":"2020-01-01","endDate":"2021-01-01","responsibilities":{"en":"Coordinating the risk assessment of applications involving living modified organisms."}} },
  "countryRegionsWorkedIn": { title: "Countries / regions worked in", type: 'term[]' },
  "previousEmployment": { title: "Previous employment", type: 'object' },
  "primaryEducation": { title: "Primary education", type: 'object', example: {"title":{"en":"Bachelor of Science in Molecular Biology"},"institution":{"en":"University of Nairobi"},"startDate":"2000-01-01","endDate":"2005-01-01"} },
  "secondaryEducation": { title: "Secondary education", type: 'object' },
  "thirdEducation": { title: "Third education", type: 'object' },
  "professionalQualification": { title: "Professional qualifications", type: 'lstring[]', example: [{"en":"PhD in Plant Biotechnology"}] },
  "expertise": { title: "Areas of expertise", type: 'term[]' },
  "relevantPublication": { title: "Relevant publications", type: 'lstring[]', example: [{"en":"Environmental risk assessment of insect-resistant maize, Journal of Biosafety, 2021"}] },
  "otherPublication": { title: "Other publications (obsolete)", type: 'lstring[]' },
  "otherPublicationRelations": { title: "Other publication links (obsolete)", type: 'link[]' },
  "relevantAward": { title: "Relevant awards (obsolete)", type: 'lstring[]' },
  "professionalMemberships": { title: "Professional memberships", type: 'lstring[]', example: [{"en":"International Society for Biosafety Research"}] },
  "panelServed": { title: "Panels served", type: 'lstring[]', example: [{"en":"Ad Hoc Technical Expert Group on Risk Assessment"}] },
  "motherTongue": { title: "Mother tongue", type: 'term[]' },
  "languageRating": { title: "Language ratings", type: 'object[]', example: [{"identifier":"en","level":"Fluent"}] },
  "references": { title: "References", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "additionalInformation": { title: "Additional information", type: 'lstring', example: {"en":"Available for peer review of risk assessments and for participation in expert panels."} },
  "additionalDocuments": { title: "Additional documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "relations": { title: "Relations", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "Updated following the 2024 review by the national focal point." }
  }
}

export default expert
