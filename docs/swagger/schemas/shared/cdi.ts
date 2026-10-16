import type { Field } from '../types'

// Capacity Development Initiative (capacityBuildingInitiative) fields, from the single shared table the archive
// served to ABS Clearing-House, Biosafety Clearing-House, Clearing-House Mechanism. Per-app differences were never
// encoded there — review gate confirms. Untitled fields are untitled in the archive.
export const cdiFields: Record<string, Field> = {
  "libraries": { title: "", type: 'term[]' },
  "title": { title: "Title of the initiative", type: 'lstring', mandatory: true, example: {"en":"Test Info"} },
  "projectNumber": { title: "Please provide any project number, identifier or reference number, if applicable.", type: 'lstring', example: {"en":"Test Info"} },
  "projectDocument": { title: "Website address(es)", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "contacts": { title: "Contact person", type: 'reference[]', mandatory: true, example: [{"identifier":"SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1"}] },
  "geographicScope": { title: "Geographic scope", type: 'term', mandatory: true, example: {"identifier":"528B1187-F1BD-4479-9FB3-ADBD9076D361"} },
  "countryRegions": { title: "Geographical or political/economic group(s)", type: 'term[]' },
  "status": { title: "Status", titleLink: '/thesaurus/cbi-status', type: 'term', mandatory: true, example: {"identifier":"73E2AC27-D964-487C-A4E6-0997BB27AF01"} },
  "startDate": { title: "Start date", type: 'datetime', mandatory: true },
  "endDate": { title: "End date", type: 'datetime', mandatory: true },
  "durationPeriod": { title: "Duration period", type: 'int', mandatory: true, example: 2 },
  "durationText": { title: "Duration period in day(s)/month(s)/year(s)", type: 'string', mandatory: true },
  "activityScope": { title: "Type of capacity development initiative", titleLink: '/thesaurus/cbi-cpb-types', type: 'term', example: {"identifier":"2DFCDD0B-5D62-4016-829F-8E70E767875A"} },
  "isProjectProgramme": { title: "Is this part of a larger project or programme?", type: 'bool', mandatory: true, example: true },
  "projectProgrammeName": { title: "Please specify the name of project or programme.", type: 'lstring', example: {"en":"Test Info"} },
  "broaderProjects": { title: "Please link to a clearing-house record about this project or programme.", type: 'reference[]', example: [{"identifier":"A75D346C-E205-A4B9-EE94-2B1CEADB7945@1"}] },
  "isImplementedByAgencies": { title: "Implementing agency(ies) or organization(s)", type: 'bool', example: true },
  "implementingAgencies": { title: "Please select the implementing agency(ies) or organization(s)", type: 'reference[]', example: [{"identifier":"2C86F905-B244-8FDD-4988-5088C023BDE9@1"}] },
  "isExecutededByAgencies": { title: "Executing agency(ies) or organization(s)", type: 'bool', example: true },
  "executingAgencies": { title: "Please select the executing agency(ies) or organization(s)", type: 'reference[]', example: [{"identifier":"2C86F905-B244-8FDD-4988-5088C023BDE9@1"}] },
  "isCollaboratededByPartners": { title: "Collaborating partner(s)", type: 'bool', example: true },
  "description": { title: "Short description of the initiative, including its goals and objectives (max 150 words)", type: 'lstring', example: {"en":"Test Info"} },
  "categories": { title: "Category(ies) of capacity development activities", titleLink: '/thesaurus/cbi-cats', type: 'term[]', example: [{"identifier":"FE6EC4EA-55E7-4E90-80AD-FE4B54707B73"},{"identifier":"5B6177DD-5E5E-434E-8CB7-D63D67D5EBED","customValue":{"en":"Test Info"}}] },
  "targetGroups": { title: "Main target group(s)/beneficiary(ies)", titleLink: '/thesaurus/cbi-audience', type: 'term[]', example: [{"identifier":"D8862526-B776-4FD2-8C62-6DF9D5E92166"},{"identifier":"5B6177DD-5E5E-434E-8CB7-D63D67D5EBED","customValue":{"en":"Test Info"}}] },
  "cbdSubjects": { title: "Related CBD subject areas", titleLink: '/thesaurus/cbd-subjects', type: 'term[]', example: [{"identifier":"CBD-SUBJECT-FOR"}] },
  "absKeyAreas": { title: "Key areas and strategic measures for capacity-building and development", titleLink: '/thesaurus/key-areas', type: 'term[]', example: [{"identifier":"9096451F-09FF-4E70-8345-3C7D84DEF545"}] },
  "cpbThematicAreas": { title: "Biosafety Thematic Areas", type: 'term[]', example: [{"identifier":"1D4567E7-C615-4A49-BD1A-7CF6AD25CC63"},{"identifier":"5B6177DD-5E5E-434E-8CB7-D63D67D5EBED","customValue":{"en":"Test Info"}}] },
  "fundingSourceTypes": { title: "Type(s) of funding source(s)", titleLink: '/thesaurus/cbi-funding-src', type: 'term[]', example: [{"identifier":"74EBA28E-1F0C-4157-BD47-C8492487AD70"}] },
  "coreFundingSources": { title: "Primary funding source(s)", type: 'reference[]', example: [{"identifier":"2C86F905-B244-8FDD-4988-5088C023BDE9@1"}] },
  "coFinancingSources": { title: "Co-funding source(s)", type: 'reference[]', example: [{"identifier":"2C86F905-B244-8FDD-4988-5088C023BDE9@1"}] },
  "totalBudget": { title: "Total budget (amount, in US dollars)", type: 'string', example: 1234 },
  "resultsAchievements": { title: "Main achievements", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "resultsOutputs": { title: "Main outputs", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "resultsReference": { title: "Please select the virtual library record number containing relevant information.", type: 'reference[]', example: [{"identifier":"2E055D01-C58F-3195-D1C1-E53F0FF352AD@1"}] },
  "bestPractices": { title: "Good practices and lessons learned", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<div><!--block-->Test Info</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
}
