import type { SchemaDescriptor } from '../types'

// The Online Reporting Tool identity of the `nationalReport7` record type.
const nationalReport: SchemaDescriptor = {
  schema: 'nationalReport7',
  name: "National Report",
  description: "A National Report record in the Online Reporting Tool.",
  fields: {
  "government": { title: "Welcome to your country's ({government}) 7th National Report overview. Please select an option to proceed.", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "sectionI": { title: "", type: 'object', mandatory: true },
  "processUndertaken": { title: "Please briefly describe the process undertaken for the preparation of this report (responses may include the following)", type: 'lstring', mandatory: true, example: {"en":"<p>Test Info</p>"} },
  "sectionII": { title: "", type: 'object', mandatory: true },
  "hasRevisedNbsap": { title: "Has your country revised or updated NBSAPs in the light of the Kunming-Montreal Global Biodiversity Framework?", type: 'string' },
  "anticipatedNbsapDate": { title: "Please indicate the anticipated date of completion of the revision or updating of the NBSAP", type: 'datetime' },
  "hasStakeholderEngagement": { title: "Did your country involve and engage stakeholders in revising or updating NBSAPs?", type: 'bool', example: true },
  "stakeholders": { title: "Stakeholders", type: 'term[]', example: [{"identifier":"EC872EB8-02B0-46E7-AAB0-C79AC629356A"}] },
  "hasNbsapAdopted": { title: "Has your country's revised or updated NBSAPs been adopted as policy or legal instruments?", type: 'string' },
  "anticipatedNbsapAdoptionDate": { title: "Please indicate the anticipated date of adoption", type: 'datetime' },
  "policyInstrument": { title: "Please indicate the type of policy instrument your country's revised or updated NBSAPs has been adopted as", type: 'term', example: {"identifier":"14FB02A6-46FB-4932-9F42-630416271B3A"} },
  "sectionIII": { title: "", type: 'object', mandatory: true },
  "targetType": { title: "", type: 'string' },
  "target": { title: "", type: 'reference', example: [{"identifier":"DECLARE-ORGANISATION_19584_20241007134350919@1"}] },
  "mainActionsInfo": { title: "Please briefly describe the main actions taken to implement this national target", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "levelOfProgress": { title: "Please indicate the current level of progress towards this national target", type: 'term', example: [{"identifier":"ao"},{"identifier":"A23DD6C0-44C5-418D-83B5-461D79D2721A"}] },
  "progressSummaryInfo": { title: "Please provide a summary of progress towards this national target, including the main outcomes achieved, key challenges encountered, and different approaches that may be taken for further implementation", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "data": { title: "", type: 'reference[]', example: [{"identifier":"SIMP-A1D0D0A8-65B1-B8D5-FF9F-B7B6B95CDDEB@1"}] },
  "indicatorData": { title: "Indicator Data", type: 'object' },
  "actionEffectivenessInfo": { title: "Please provide examples or cases to illustrate the effectiveness of the actions taken to implement this national assessment. If needed, provide relevant web links or attach related materials or publications", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "sdgRelationInfo": { title: "Please briefly describe how the implementation of this national target relates to progress in achieving related Sustainable Development Goals and associated targets and implementation of other related agreements", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "sectionIV": { title: "", type: 'object', mandatory: true },
  "gbfGoal": { title: "", type: 'term', example: [{"identifier":"ao"},{"identifier":"A23DD6C0-44C5-418D-83B5-461D79D2721A"}] },
  "summaryOfProgress": { title: "Summary of national progress contributing to the global goals", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "indicatorData": { title: "Indicator Data", type: 'object' },
  "sectionV": { title: "", type: 'object', mandatory: true },
  "assessmentSummaryInfo": { title: "", type: 'lstring', mandatory: true, example: {"en":"<p>Test Info</p>"} },
  "annex": { title: "", type: 'object' },
  "additionalInformation": { title: "Additional Information", type: 'lstring', example: {"en":"<p>Test Info</p>"} },
  "additionalDocuments": { title: "Additional Documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google.com","language":"en"}] },
  "attachments": { title: "Attachments", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google.com","language":"en"}] }
  }
}

export default nationalReport
