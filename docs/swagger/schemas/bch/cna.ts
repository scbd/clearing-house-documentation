import type { SchemaDescriptor } from '../types'
import { cnaFields } from '../shared/cna'

// The Biosafety Clearing-House identity of the `authority` record type.
// ABS-only and obsolete `authority` fields: not shown in the BCH CNA edit form.
const notInBchForm = [
  'responsibleForAll', 'policyBasisForCompetency', 'policyBasisForCompetencyRef', 'absResponsibleForAll',
  'absPolicyBasisForCompetency', 'absPolicyBasisForCompetencyRef', 'absJurisdiction', 'absJurisdictionName',
  'absGeneticResourceTypes', 'absGeneticResourceAreas', 'libraries'
]

const cna: SchemaDescriptor = {
  schema: 'authority',
  name: "Competent National Authority",
  description: "A Competent National Authority record in the Biosafety Clearing-House.",
  fields: {
    ...Object.fromEntries(Object.entries(cnaFields).filter(([k]) => !notInBchForm.includes(k))),
    // BCH CNA form: regulatory functions are described in detail and not required; functions and organism types are.
    responsibilities: { ...cnaFields.responsibilities, title: "Detailed description of the regulatory functions", mandatory: undefined },
    functions: { ...cnaFields.functions, mandatory: true },
    cpbOrganismTypes: { ...cnaFields.cpbOrganismTypes, mandatory: true }
  }
}

export default cna
