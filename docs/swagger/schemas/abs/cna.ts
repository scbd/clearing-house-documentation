import type { SchemaDescriptor } from '../types'
import { cnaFields } from '../shared/cna'

// The ABS Clearing-House identity of the `authority` record type.
// BCH-only and obsolete `authority` fields: not shown in the ABS CNA edit form.
const notInAbsForm = [
  'functions', 'cpbOrganismTypes', 'absResponsibleForAll', 'absPolicyBasisForCompetency',
  'absPolicyBasisForCompetencyRef', 'absGeneticResourceAreas', 'libraries'
]

const cna: SchemaDescriptor = {
  schema: 'authority',
  name: "Competent National Authority",
  description: "A Competent National Authority record in the ABS Clearing-House.",
  fields: {
    ...Object.fromEntries(Object.entries(cnaFields).filter(([k]) => !notInAbsForm.includes(k))),
    // The ABS form only requires these when `responsibleForAll` is false.
    responsibilities: { ...cnaFields.responsibilities, mandatory: undefined },
    absJurisdiction: { ...cnaFields.absJurisdiction, mandatory: undefined }
  }
}

export default cna
