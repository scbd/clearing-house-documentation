import type { SchemaDescriptor } from '../types'

// The Online Reporting Tool identity of the `nationalTarget7Mapping` record type.
const nationalTargetMapping: SchemaDescriptor = {
  schema: 'nationalTarget7Mapping',
  name: "National Target Mapping",
  description: "A National Target Mapping record in the Online Reporting Tool.",
  fields: {
  "government": { title: "Government", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "globalGoalOrTarget": { title: "", type: 'term' },
  "elementOfGlobalTargetsInfo": { title: "Elements of the global targets addressed by national targets (Please also include which aspects of the global targets have not been covered by the national targets)", type: 'lstring', mandatory: true, example: {"en":"<p>Test Info</p>"} },
  "referencePeriod": { title: "Reference Period", type: 'object', example: [{"headlineIndicator":{"identifier":"GBF-INDICATOR-1.1"},"hasReferencePeriod":true,"referencePeriodInfo":{"en":"<p>TEst Info</p>"}}] },
  "headlineIndicator": { title: "", type: 'reference' },
  "hasReferencePeriod": { title: "Is there a reference period which relates to the headline indicator?", type: 'bool', example: true },
  "referencePeriodInfo": { title: "", type: 'lstring' },
  "additionalInformation": { title: "", type: 'lstring' },
  "additionalDocuments": { title: "", type: 'link[]' }
  }
}

export default nationalTargetMapping
