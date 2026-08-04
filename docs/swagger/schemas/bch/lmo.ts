import type { SchemaDescriptor } from '../types'

// The Biosafety Clearing-House identity of the `modifiedOrganism` record type.
const lmo: SchemaDescriptor = {
  schema: 'modifiedOrganism',
  name: "Living Modified Organism",
  description: "A Living Modified Organism record in the Biosafety Clearing-House.",
  fields: {
  "identity": { title: "LMO name", type: 'lstring', example: {"en":"Test Name"} },
  "transformationEvent": { title: "Transformation event", type: 'string', mandatory: true },
  "hasUniqueIdentification": { title: "Does this LMO have a unique identifier?", type: 'bool', mandatory: true, example: true },
  "uniqueIdentification": { title: "Unique identifier", type: 'string' },
  "developers": { title: "Developer(s)", type: 'reference[]', mandatory: true, example: [{"identifier":"3CBDA8AA-4A16-CA5C-D405-7F4E865A60AA@1"}] },
  "description": { title: "Description", type: 'lstring', mandatory: true, example: {"en":"<div><!--block-->Test Description</div>"} },
  "recipientOrganisms": { title: "“Recipient Organism” or “Parental Organisms”", type: 'reference[]', mandatory: true, example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "recipientOrganismCollectionPoint": { title: "Point of collection or acquisition of the recipient organism or parental organisms", type: 'lstring', example: {"en":"Test Point"} },
  "linkedModifiedOrganisms": { title: "Related LMO(s)", type: 'reference[]', example: [{"identifier":"1E027990-5D44-F3AF-75E3-715B60BFD3CD@8"}] },
  "genes": { title: "Introduced or modified genetic element(s)", type: 'reference[]', mandatory: true, example: [{"identifier":"B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2"}] },
  "geneNotes": { title: "Notes regarding the genetic elements present in this LMO", type: 'lstring', example: {"en":"<div><!--block-->Test Notes</div>"} },
  "affectedGenes": { title: "Other gene(s) whose expression was affected by the transformation", type: 'reference[]', example: [{"identifier":"B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2"}] },
  "affectedGeneNotes": { title: "Please describe how the expression of the gene(s) was affected", type: 'lstring', example: {"en":"<div><!--block-->Test Description</div>"} },
  "vector": { title: "Vector", type: 'lstring', mandatory: true, example: {"en":"Test Vector"} },
  "geneConstructs": { title: "Genetic elements construct", type: 'object[]', example: [[{"type":"senseStart","identifier":"B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2","size":45},{"type":"sense","identifier":"B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2","size":45},{"type":"senseStop","identifier":"B3F2CEA4-EB7A-DDF2-02CA-701520EE1BE7@2","size":50}]] },
  "commonUses": { title: "Common use(s) of the LMO", type: 'term[]', example: [{"identifier":"F816F788-BBC3-4ADB-9979-AE07CDED094E"}] },
  "techniqueUsed": { title: "Techniques used for the modification", type: 'term[]', mandatory: true, example: [{"identifier":"0368E952-6D50-43D3-B23A-EFA438B410A9"}] },
  "isGeneEdited": { title: "", type: 'bool' },
  "traits": { title: "Modified traits", type: 'term[]', mandatory: true, example: [{"identifier":"31396BD1-9E3E-4EB3-A29E-9A22B7230221"},{"identifier":"7CC2B74F-B117-4E7A-A358-2A8284430651"}] },
  "detectionMethod": { title: "Additional Information", type: 'lstring', example: {"en":"<div><!--block-->Test Additional Information</div>"} },
  "detectionMethodLinks": { title: "External link(s)", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] },
  "relevantInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<div><!--block-->Test Relevant Information</div>"} },
  "relevantDocuments": { title: "Any other relevant documents", type: 'link[]', example: [{"url":"https://www.google.com","name":"Google","language":"en"}] }
  }
}

export default lmo
