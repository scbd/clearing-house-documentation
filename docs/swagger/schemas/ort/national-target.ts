import type { SchemaDescriptor } from '../types'

// The Online Reporting Tool identity of the `nationalTarget7` record type.
const nationalTarget: SchemaDescriptor = {
  schema: 'nationalTarget7',
  name: "National Target",
  description: "A National Target record in the Online Reporting Tool.",
  fields: {
  "government": { title: "Government", titleLink: '/thesaurus/countries', type: 'term', mandatory: true, example: {"identifier":"af"} },
  "title": { title: "Enter national target title", type: 'lstring', mandatory: true, example: {"en":"Protect 30% of land and sea areas by 2030"} },
  "description": { title: "Description", type: 'lstring', example: {"en":"<p>Expand the national protected area network to cover at least 30% of terrestrial and marine areas by 2030.</p>"} },
  "sequence": { title: "", type: 'int' },
  "globalGoalAlignment": { title: "Contribution to global Goals", titleLink: '/thesaurus/gbf-goals', type: 'term[]', example: [{"identifier":"GBF-GOAL-A"}] },
  "globalTargetAlignment": { title: "Alignment with global targets", titleLink: '/thesaurus/gbf-targets', type: 'term[]', mandatory: true, example: [{"identifier":"GBF-TARGET-01","degreeOfAlignment":{"identifier":"AABF237C-F906-40D2-9595-5226C8B18A58"}}] },
  "degreeOfAlignmentInfo": { title: "Explanation, including which aspects of the goal or target are covered", type: 'lstring', example: {"en":"<p>The national target covers the area-based conservation elements of Global Target 3, including ecological representativeness and connectivity.</p>"} },
  "implementingConsiderations": { title: "Which of the considerations for implementation in Section C of the GBF have been taken into account in developing this national target, and the actions to implement it", titleLink: '/thesaurus/gbf-target-considerations', type: 'term[]', example: [{"identifier":"76553677-A17D-4DE3-8CDD-6010CDCF8A90"}] },
  "implementingConsiderationsInfo": { title: "Please explain how these considerations have been taken into account", type: 'lstring', example: {"en":"<p>Rights and participation of indigenous peoples and local communities were considered through consultations on protected area boundaries.</p>"} },
  "mainPolicyOfMeasureOrActionInfo": { title: "Please outline the main policy measures or actions that will be taken to achieve this national target.", type: 'lstring', example: {"en":"<p>Designate new protected areas, strengthen management effectiveness and establish ecological corridors between existing sites.</p>"} },
  "headlineIndicators": { title: "Headline indicators", titleLink: '/thesaurus/gbf-headline-indicators', type: 'term[]', example: [{"identifier":"GBF-INDICATOR-1.1"},{"identifier":"GBF-INDICATOR-A.1"},{"identifier":"GBF-INDICATOR-A.2"},{"identifier":"GBF-INDICATOR-A.3"},{"identifier":"GBF-INDICATOR-A.4"}] },
  "binaryIndicators": { title: "Binary indicators", titleLink: '/thesaurus/binary-indicator', type: 'term[]', example: [{"identifier":"KMGBF-INDICATOR-BIN-1"}] },
  "componentIndicators": { title: "Component indicators", titleLink: '/thesaurus/gbf-component-indicators', type: 'term[]', example: [{"identifier":"GBF-INDICATOR-114"}] },
  "complementaryIndicators": { title: "Complementary indicators", titleLink: '/thesaurus/gbf-complementary-indicators', type: 'term[]', example: [{"identifier":"GBF-INDICATOR-114"}] },
  "otherNationalIndicators": { title: "Other national indicators", type: 'object[]' },
  "nonStateActorCommitmentInfo": { title: "List the non-state commitments towards this national Target", type: 'lstring', example: {"en":"<p>Private landowners and conservation NGOs have committed to placing additional land under voluntary conservation agreements.</p>"} },
  "hasNonStateActors": { title: "Are there any overlaps or links between this national target and targets or commitments submitted as non-State actor commitments to the Kunming-Montreal Global Biodiversity Framework?", type: 'bool', example: true },
  "nonStateActorsInfo": { title: "Please indicate which commitment(s) and which actor(s)", type: 'lstring', example: {"en":"<p>Commitments from the national conservation trust and the association of private landowners.</p>"} },
  "additionalImplementation": { title: "Please indicate if additional means of implementation are needed for the attainment of this national target.", type: 'term', mandatory: true, example: {"identifier":"additionalImplementationRequired","customValue":{"en":"<p>Additional capacity-building support is required for protected area managers.</p>"}} },
  "additionalImplementationInfo": { title: "Additional explanation", type: 'lstring', example: {"en":"<p>Additional financial resources and technical training for protected area managers are needed.</p>"} },
  "additionalInformation": { title: "Any other relevant information", type: 'lstring', example: {"en":"<p>The target is aligned with the national land-use planning framework.</p>"} },
  "additionalDocuments": { title: "", type: 'link[]' }
  }
}

export default nationalTarget
