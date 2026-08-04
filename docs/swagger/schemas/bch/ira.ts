import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `independentRiskAssessment` record type.
const ira: SchemaDescriptor = {
  schema: 'independentRiskAssessment',
  name: "Independent Risk Assessment",
  description: "A Independent Risk Assessment record in the Biosafety Clearing-House.",
  fields: {
  "title": { title: "Title of the risk assessment", type: 'lstring', mandatory: true, example: {"en":"Test TItle"} },
  "date": { title: "Date of the risk assessment", type: 'datetime', mandatory: true },
  "organizations": { title: "Institution responsible for the risk assessment", type: 'reference[]', example: [{"identifier":"04139A35-1F8B-FC94-45D6-4F3AD7675685@1"}] },
  "dateOfRaNotAvailable": { title: "Date not available", type: 'bool', mandatory: true },
  "contacts": { title: "Contact details of the main responsible risk assessor", type: 'reference[]', example: [{"identifier":"3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1"}] },
  "modifiedOrganisms": { title: "Living modified organism(s)", type: 'reference[]', mandatory: true, example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "scopes": { title: "Scope of the risk assessment", type: 'term[]', mandatory: true, example: [{"identifier":"D6B59E8A-D82C-4516-917A-A745ACDA5931"},{"identifier":"015737FC-ABC2-460C-A099-06A1B01E649A"},{"identifier":"BEBF757E-E3CC-4913-8D9F-2D165CD63ECE"}] },
  "documents": { title: "Risk assessment report / summary", type: 'link[]', mandatory: true, example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
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

export default ira
