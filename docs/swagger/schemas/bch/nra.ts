import type { SchemaDescriptor } from '../types'

// Drafted from the shared C# risk-assessment base (api-examples) plus the national-only fields;
// field titles are inherited from the independentRiskAssessment descriptor and the five
// national-only titles are humanized — mandatory flags unset, pending review.
// The Biosafety Clearing-House identity of the `nationalRiskAssessment` record type.
const nra: SchemaDescriptor = {
  schema: 'nationalRiskAssessment',
  name: "National Risk Assessment",
  description: "A National Risk Assessment record in the Biosafety Clearing-House.",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', example: {"identifier":"af"} },
  "authorities": { title: "Competent National Authority(ies)", type: 'reference[]', example: [{"identifier":"78AFAA88-47EA-9333-AD6E-C21BCB17DE21@1"}] },
  "isForCommercialUse": { title: "Is the risk assessment for commercial use?", type: 'bool', example: true },
  "forwardToOECD": { title: "Forward to the OECD Secretariat", type: 'bool', example: true },
  "isForFoodSafety": { title: "Is the risk assessment for food safety?", type: 'bool', example: true },
  "codexConducted": { title: "Was a Codex food safety assessment conducted?", type: 'bool', example: true },
  "forwardToFAO": { title: "Forward to FAO", type: 'bool', example: true },
  "title": { title: "Title of the risk assessment", type: 'lstring', example: {"en":"Test TItle"} },
  "date": { title: "Date of the risk assessment", type: 'datetime' },
  "dateOfRaNotAvailable": { title: "Date not available", type: 'bool' },
  "contacts": { title: "Contact details of the main responsible risk assessor", type: 'reference[]', example: [{"identifier":"3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1"}] },
  "modifiedOrganisms": { title: "Living modified organism(s)", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "scopes": { title: "Scope of the risk assessment", titleLink: '/thesaurus/risk-assessment-scope', type: 'term[]', example: [{"identifier":"D6B59E8A-D82C-4516-917A-A745ACDA5931"},{"identifier":"015737FC-ABC2-460C-A099-06A1B01E649A"},{"identifier":"BEBF757E-E3CC-4913-8D9F-2D165CD63ECE"}] },
  "documents": { title: "Risk assessment report / summary", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "documentsSummary": { title: "Please use this field to provide a summary of the risk assessment.", type: 'lstring', example: {"en":"<div><!--block-->Test field</div>"} },
  "adverseEffects": { title: "Potential adverse effects identified in the risk assessment", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "adverseEffectsLikelihood": { title: "Likelihood that the potential adverse effects will be realized", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "adverseEffectsConsequence": { title: "Possible consequences", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "adverseEffectsOverallRisk": { title: "Estimation of the overall risk", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "adverseEffectsRecommendation": { title: "Recommendation(s) on whether the risks are acceptable/manageable and any management strategies", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "riskManagementStrategies": { title: "Need(s) for further information on specific issues of concern", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "receivingEnvironment": { title: "Receiving environment(s) considered", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "detectionMethod": { title: "LMO detection and identification methods proposed", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "expires": { title: "Should this information be confirmed or updated after two years from the date of submission?", type: 'bool', example: true },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<div><!--block-->Test information</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
  }
}

export default nra