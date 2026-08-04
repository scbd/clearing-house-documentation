import type { SchemaDescriptor } from '../types'

// The ABS Clearing-House identity of the `absPermit` record type.
const ircc: SchemaDescriptor = {
  schema: 'absPermit',
  name: "Internationally Recognized Certificate of Compliance",
  description: "A Internationally Recognized Certificate of Compliance record in the ABS Clearing-House.",
  listFilterExample: "(type eq 'absPermit')",
  fields: {
  "government": { title: "Country", titleLink: "clearingHouseBase('/thesaurus/general/countries')", type: 'term', mandatory: true, example: {"identifier":"af"} },
  "updateReason": { title: "", type: 'lstring' },
  "absCNA": { title: "Competent national authority (CNA) responsible for issuing this permit or its equivalent", type: 'reference', mandatory: true, example: {"identifier":"C84C7E6C-134C-F1B1-9A3B-B7443F135239@2"} },
  "title": { title: "Reference number of the permit or its equivalent", type: 'lstring', mandatory: true, example: {"en":"123456"} },
  "referenceToNationalPermit": { title: "Additional national references or identifiers", type: 'lstring', example: {"en":"strsgfsgfdxgf"} },
  "dateOfIssuance": { title: "Date of issuance of the permit or its equivalent", type: 'date', mandatory: true, example: "2024-07-02" },
  "providers": { title: "The provider", type: 'reference[]', mandatory: true, example: [{"identifier":"DECLARE-ORGANISATION_3386_20240709020251617@1"}] },
  "providersConfidential": { title: "This information is confidential", type: 'bool' },
  "entitiesToWhomPICGranted": { title: "", type: 'reference[]', mandatory: true, example: [{"identifier":"DECLARE-ORGANISATION_3386_20240709020251617@1"}] },
  "entitiesToWhomPICGrantedConfidential": { title: "This information is confidential", type: 'bool', example: true },
  "subjectMatter": { title: "1. Subject-matter or genetic resources covered by the permit or its equivalent", type: 'lstring', mandatory: true, example: {"en":"<div><!--block-->asdf</div>"} },
  "subjectMatterConfidential": { title: "2. This information is confidential", type: 'bool' },
  "keywords": { title: "Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent", titleLink: "clearingHouseBase('/thesaurus/permit/permit-keywords')", type: 'term[]', example: [{"identifier":"357DBB22-6A6C-4C49-BA1F-037320B09247"}] },
  "keywordOther": { title: "Other keywords", type: 'lstring', mandatory: true },
  "specimens": { title: "1. Specimen data", type: 'link[]', example: [{"url":"https://www.Google.com","name":"Google","language":"en"}] },
  "taxonomies": { title: "2. Taxonomy", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "gisFiles": { title: "3. Geographic coordinates", type: 'link[]' },
  "gisMapCenter": { title: "", type: 'mapLocation' },
  "amendmentIntent": { title: "Amendment intent", type: 'string', mandatory: true },
  "amendmentDescription": { title: "Provide a summary of the reason for the update of the record", type: 'lstring', mandatory: true },
  "picGranted": { title: "Confirmation that prior informed consent (PIC) was obtained or granted", type: 'bool', mandatory: true, example: true },
  "picInformation": { title: "Additional information about the prior informed consent (PIC)", type: 'lstring', example: {"en":"<div><!--block-->asdfasdfasdf</div>"} },
  "picDocuments": { title: "Additional information about the prior informed consent (PIC) - Documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "matEstablished": { title: "Confirmation that mutually agreed terms (MAT) were established", type: 'bool', mandatory: true, example: true },
  "matInformation": { title: "Additional information about the mutually agreed terms (MAT) - Information", type: 'lstring', example: {"en":"<div><!--block-->asdf</div>"} },
  "matDocuments": { title: "Additional information about the mutually agreed terms (MAT) - Documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "usages": { title: "1. Indicate if the permit or its equivalent covers commercial and/or non-commercial use", titleLink: "clearingHouseBase('/thesaurus/permit/permit-usage')", type: 'term[]', mandatory: true, example: [{"identifier":"5E833A3F-87D1-4ADD-8701-9F1B76383017"}] },
  "usagesConfidential": { title: "2. This information is confidential", type: 'bool', example: true },
  "usagesDescription": { title: "Additional information about the specified uses covered by the permit or its equivalent or use restrictions", type: 'lstring', example: {"en":"<div><!--block-->asdf</div>"} },
  "thirdPartyTransferCondition": { title: "Conditions for third party transfer", type: 'lstring', example: {"en":"<div><!--block-->asdf</div>"} },
  "dateOfExpiry": { title: "Date of expiry of the permit or its equivalent", type: 'date', example: "2024-07-16" },
  "permitFiles": { title: "Copy of the permit or its equivalent, or other relevant open-access document", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "permitDescription": { title: "Short description of the attached link(s) and/or file(s)", type: 'lstring', example: {"en":"<div><!--block-->asdf</div>"} },
  "relevantInformation": { title: "Additional Information", type: 'lstring', example: {"en":"<div><!--block-->asfd</div>"} },
  "relevantDocuments": { title: "Other relevant website addresses and/or attached documents", type: 'term[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "notes": { title: "Notes", type: 'string', example: "[\"[ Pramod Sam | Jul 8, 2024 8:10:52 PM ] - aasdfasdf\"]" },
  "relatedIRCC": { title: "Links to other internationally recognized certificate(s) of compliance (IRCC) that relate(s) to this permit", type: 'reference[]', example: [{"identifier":"8C22B282-BE5A-72D8-C754-932CC49CC9B4@1"}] }
  }
}

export default ircc
