import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `absPermit` record type.
const ircc: SchemaDescriptor = {
  schema: 'absPermit',
  name: "Internationally Recognized Certificate of Compliance",
  description: "A Internationally Recognized Certificate of Compliance record in the ABS Clearing-House.",
  listFilterExample: "(type eq 'absPermit')",
  fields: {
  "government": { title: "Country", titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: {"identifier":"af"} },
  "absCNA": { title: "Competent national authority (CNA) responsible for issuing this permit or its equivalent", type: 'reference', mandatory: true, example: {"identifier":"C84C7E6C-134C-F1B1-9A3B-B7443F135239@2"} },
  "title": { title: "Reference number of the permit or its equivalent", type: 'lstring', mandatory: true, example: {"en":"PIC-2023-0142"} },
  "referenceToNationalPermit": { title: "Additional national references or identifiers", type: 'lstring', example: {"en":"NP/2023/0142"} },
  "dateOfIssuance": { title: "Date of issuance of the permit or its equivalent", type: 'date', mandatory: true, example: "2024-07-02" },
  "providers": { title: "The provider", type: 'reference[]', example: [{"identifier":"DECLARE-ORGANISATION_3386_20240709020251617@1"}] },
  "providersConfidential": { title: "This information is confidential", type: 'bool' },
  "entitiesToWhomPICGranted": { title: "Person or entity to whom prior informed consent (PIC) was granted", type: 'reference[]', example: [{"identifier":"DECLARE-ORGANISATION_3386_20240709020251617@1"}] },
  "entitiesToWhomPICGrantedConfidential": { title: "This information is confidential", type: 'bool', example: true },
  "subjectMatter": { title: "Subject-matter or genetic resources covered by the permit or its equivalent", type: 'lstring', example: {"en":"<div>Wild-collected plant specimens of the genus Rubus for taxonomic research</div>"} },
  "subjectMatterConfidential": { title: "This information is confidential", type: 'bool' },
  "keywords": { title: "Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent", titleLink: '/thesaurus/permit-keywords', type: 'term[]', mandatory: true, example: [{"identifier":"357DBB22-6A6C-4C49-BA1F-037320B09247"}] },
  "keywordOther": { title: "Other keywords", type: 'lstring' },
  "specimens": { title: "Specimen data", type: 'link[]', example: [{"url":"https://www.Google.com","name":"Google","language":"en"}] },
  "taxonomies": { title: "Taxonomy", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "gisFiles": { title: "Geographic coordinates", type: 'link[]' },
  "gisMapCenter": { title: "", type: 'mapLocation' },
  "amendmentIntent": { title: "Please indicate what the intent of the modification is", type: 'string' },
  "amendmentDescription": { title: "Provide a summary of the reason for the update of the record", type: 'lstring' },
  "picGranted": { title: "Confirmation that prior informed consent (PIC) was obtained or granted", type: 'bool', mandatory: true, example: true },
  "picInformation": { title: "Additional information about the prior informed consent (PIC)", type: 'lstring', example: {"en":"<div>Consent was granted by the competent national authority after consultation with local communities</div>"} },
  "picDocuments": { title: "Additional information about the prior informed consent (PIC) - Documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "matEstablished": { title: "Confirmation that mutually agreed terms (MAT) were established", type: 'bool', mandatory: true, example: true },
  "matInformation": { title: "Additional information about the mutually agreed terms (MAT) - Information", type: 'lstring', example: {"en":"<div>Mutually agreed terms specify non-monetary benefit-sharing, including joint publication and capacity-building</div>"} },
  "matDocuments": { title: "Additional information about the mutually agreed terms (MAT) - Documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "usages": { title: "Indicate if the permit or its equivalent covers commercial and/or non-commercial use", titleLink: '/thesaurus/permit-usage', type: 'term[]', example: [{"identifier":"5E833A3F-87D1-4ADD-8701-9F1B76383017"}] },
  "usagesConfidential": { title: "This information is confidential", type: 'bool', example: true },
  "usagesDescription": { title: "Additional information about the specified uses covered by the permit or its equivalent or use restrictions", type: 'lstring', example: {"en":"<div>Use is limited to non-commercial taxonomic and ecological research</div>"} },
  "thirdPartyTransferCondition": { title: "Conditions for third party transfer", type: 'lstring', example: {"en":"<div>Transfer to third parties requires prior written approval from the provider</div>"} },
  "dateOfExpiry": { title: "Date of expiry of the permit or its equivalent", type: 'date', example: "2024-07-16" },
  "permitFiles": { title: "Copy of the permit or its equivalent, or other relevant open-access document", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "permitDescription": { title: "Short description of the attached link(s) and/or file(s)", type: 'lstring', example: {"en":"<div>Scanned copy of the signed permit and the mutually agreed terms</div>"} },
  "relevantInformation": { title: "Additional Information", type: 'lstring', example: {"en":"<div>The permit is valid for three years from the date of issue</div>"} },
  "relevantDocuments": { title: "Other relevant website addresses and/or attached documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "[\"[ Jane Doe | Jul 8, 2024 8:10:52 PM ] - this is an internal note\"]" },
  "relatedIRCCs": { title: "Links to other internationally recognized certificate(s) of compliance (IRCC) that relate(s) to this permit", type: 'reference[]', example: [{"identifier":"8C22B282-BE5A-72D8-C754-932CC49CC9B4@1"}] }
  }
}

export default ircc
