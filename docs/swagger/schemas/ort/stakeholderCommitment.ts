import type { SchemaDescriptor } from '../types'

// The Online Reporting Tool identity of the `stakeholderCommitment` record type.
// Fields recovered from the archive's <schema-row> table (a different format
// from the HTML tables used by other types).
const stakeholderCommitment: SchemaDescriptor = {
  schema: 'stakeholderCommitment',
  name: 'Stakeholder Commitment',
  description: 'A Stakeholder Commitment record in the Online Reporting Tool.',
  listFilterExample: "(type eq 'stakeholderCommitment')",
  fields: {
  "firstName": { title: "First Name", type: 'string', mandatory: true, example: "John" },
  "lastName": { title: "Last Name", type: 'string', mandatory: true, example: "Doe" },
  "designation": { title: "Designation", type: 'lstring', mandatory: true, example: {"en":"Software Engineer"} },
  "department": { title: "Department", type: 'lstring', mandatory: true, example: {"en":"Division"} },
  "organization": { title: "Organization", type: 'lstring', mandatory: true, example: {"en":"Test Organization"} },
  "organizationAcronym": { title: "Organization acronym", type: 'lstring', example: {"en":"CSBD"} },
  "organizationType": { title: "Type of Organization", titleLink: '/thesaurus/organization-types', type: 'term', mandatory: true },
  "jurisdiction": { title: "Jurisdiction", type: 'term', mandatory: true },
  "jurisdictionCountries": { title: "Countries", titleLink: '/thesaurus/countries', type: 'term[]', mandatory: true, example: {"identifier":"af"} },
  "jurisdictionRegions": { title: "Regions", titleLink: '/thesaurus/regions', type: 'term[]', mandatory: true },
  "title": { title: "Title of commitment", type: 'lstring', mandatory: true },
  "description": { title: "Description of commitment", type: 'lstring', mandatory: true },
  "timelineStartDate": { title: "Start date", type: 'datetime', mandatory: true },
  "timelineEndDate": { title: "End date (if applicable)", type: 'datetime', mandatory: true },
  "isOpenEnded": { title: "Alternatively, indicate whether the commitment is open-ended", type: 'bool', mandatory: true },
  "nextStepsInformation": { title: "Share information on plans for next steps", type: 'lstring', mandatory: true },
  "performanceInformation": { title: "Key performance indicators...", type: 'lstring' },
  "endorsementsInformation": { title: "CountryReviews...", type: 'lstring' },
  "primaryGlobalAlignment": { title: "Primary National Target", titleLink: '/thesaurus/gbf-targets', type: 'term', mandatory: true },
  "primaryNationalTarget": { title: "Primary global target", type: 'reference', mandatory: true },
  "otherGlobalAlignments": { title: "Other Global Alignment(s)", titleLink: '/thesaurus/gbf-targets', type: 'term[]' },
  "otherNationalTargets": { title: "Other national target(s)", type: 'reference[]' },
  "alignmentInformation": { title: "Alignment Information", type: 'lstring' },
  "indicators": { title: "Indicators", titleLink: '/thesaurus/gbf-headline-indicators', type: 'term[]' },
  "implementingConsiderations": { title: "Elements of the Framework", titleLink: '/thesaurus/gbf-target-considerations', type: 'term[]' },
  "coverageCountries": { title: "Coverage Countries", titleLink: '/thesaurus/countries', type: 'term[]', example: {"identifier":"af"} },
  "coverageRegions": { title: "Coverage Regions", titleLink: '/thesaurus/regions', type: 'term[]' },
  "coverageOther": { title: "Coverage Other", type: 'lstring[]' },
  "fundingSource": { title: "Funding to be used towards meeting the commitment", type: 'lstring', example: "funding source" },
  "isFundingSufficient": { title: "Is the funding sufficient for achieving the commitment?", type: 'bool', mandatory: true },
  "internationalFrameworks": { title: "International Frameworks", type: 'lstring' },
  "partners": { title: "Partners", type: 'lstring' },
  "isLinkedToNbsap": { title: "Is Linked To NBSAP", type: 'bool' },
  "linkedToNbsapCountries": { title: "Linked To NBSAP Countries", titleLink: '/thesaurus/countries', type: 'term[]', example: {"identifier":"af"} },
  "isReportingOnTarget15": { title: "Will you report or provide information on Target 15 of the Framework?", type: 'bool', mandatory: true },
  "target15Information": { title: "Please provide details on what and how you will report or provide", type: 'lstring', mandatory: true },
  "isProgressTracked": { title: "Is progress towards the commitment tracked?", type: 'bool', mandatory: true },
  "progressInformation": { title: "What is the format...", type: 'lstring', mandatory: true },
  "progressTrackingUrl": { title: "Provide a web address, if available", type: 'lstring', example: "https://example.com" },
  "implementationStrategies": { title: "Potential ways to address challenges and opportunities...", type: 'lstring' },
  "additionalInformation": { title: "Provide any other relevant information...", type: 'lstring' },
  "additionalDocuments": { title: "Other relevant website address or attached documents", type: 'link[]' },
  "linkedAttachments": { title: "Linked Documents", type: 'link[]', example: [{"url":"https://example.com","name":"Attachment"}] },
  "notes": { title: "Notes", type: 'string', example: "Example notes" }
  }
}

export default stakeholderCommitment
