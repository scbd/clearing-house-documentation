// Sidebar for the rebuilt documentation. It grows as record types are
// migrated from .archive/ — one reviewed step at a time (see REBUILD.md).
// The previous hand-maintained sidebars are in .archive/routes/ for reference.

interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

const gettingStarted = (base: string): SidebarItem => ({
  text: 'Getting Started',
  collapsed: false,
  items: [
    { text: 'Introduction', link: `${base}/` },
    { text: 'Realms', link: `${base}/realms` },
    { text: 'Record Types', link: `${base}/record-types` },
    { text: 'Custom Types', link: `${base}/custom-types` },
    { text: 'User Management', link: `${base}/user-management` },
    { text: 'Apache Solr', link: `${base}/apache-solr` }
  ]
})

const user = (base: string): SidebarItem => ({
  text: 'User',
  collapsed: false,
  items: [
    { text: 'Authentication', link: `${base}/user/authentication` }
  ]
})

// Each record type's sidebar section, built inline per app so link paths are
// literal and match page files exactly (a typo silently drops the page).
export default {
  '/': [],
  '/absch/': [
    gettingStarted('/absch'),
    user('/absch'),
    {
      text: "Contact",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/contact/fields' },
        { text: "List", link: '/absch/contact/list' },
        { text: "Search", link: '/absch/contact/solr' },
        { text: "Get", link: '/absch/contact/get' },
        { text: "Create", link: '/absch/contact/create' },
        { text: "Update", link: '/absch/contact/update' },
        { text: "Delete", link: '/absch/contact/delete' }
      ]
    },
    {
      text: "Organization",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/org/fields' },
        { text: "Search", link: '/absch/org/solr' },
        { text: "Get", link: '/absch/org/get' }
      ]
    },
    {
      text: "Virtual Library Resource",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/vlr/fields' },
        { text: "Search", link: '/absch/vlr/solr' },
        { text: "Get", link: '/absch/vlr/get' }
      ]
    },
    {
      text: "Capacity Development Initiative",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/cdi/fields' },
        { text: "Search", link: '/absch/cdi/solr' },
        { text: "Get", link: '/absch/cdi/get' }
      ]
    },
    {
      text: "Competent National Authority",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/cna/fields' },
        { text: "Search", link: '/absch/cna/solr' },
        { text: "Get", link: '/absch/cna/get' }
      ]
    },
    {
      text: "National Website or Database",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/ndb/fields' },
        { text: "Search", link: '/absch/ndb/solr' },
        { text: "Get", link: '/absch/ndb/get' }
      ]
    },
    {
      text: "National Focal Point",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/nfp/fields' },
        { text: "Search", link: '/absch/nfp/solr' },
        { text: "Get", link: '/absch/nfp/get' }
      ]
    },
    {
      text: "Checkpoint",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/cp/fields' },
        { text: "Search", link: '/absch/cp/solr' },
        { text: "Get", link: '/absch/cp/get' }
      ]
    },
    {
      text: "Checkpoint Communique",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/cpc/fields' },
        { text: "List", link: '/absch/cpc/list' },
        { text: "Search", link: '/absch/cpc/solr' },
        { text: "Get", link: '/absch/cpc/get' },
        { text: "Create", link: '/absch/cpc/create' },
        { text: "Update", link: '/absch/cpc/update' },
        { text: "Delete", link: '/absch/cpc/delete' }
      ]
    },
    {
      text: "Community Protocol",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/cpp/fields' },
        { text: "Search", link: '/absch/cpp/solr' },
        { text: "Get", link: '/absch/cpp/get' }
      ]
    },
    {
      text: "Internationally Recognized Certificate of Compliance",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/ircc/fields' },
        { text: "List", link: '/absch/ircc/list' },
        { text: "Search", link: '/absch/ircc/solr' },
        { text: "Get", link: '/absch/ircc/get' },
        { text: "Create", link: '/absch/ircc/create' },
        { text: "Update", link: '/absch/ircc/update' },
        { text: "Delete", link: '/absch/ircc/delete' }
      ]
    },
    {
      text: "Measure",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/msr/fields' },
        { text: "Search", link: '/absch/msr/solr' },
        { text: "Get", link: '/absch/msr/get' }
      ]
    },
    {
      text: "National Model Contractual Clause",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/nmcc/fields' },
        { text: "Search", link: '/absch/nmcc/solr' },
        { text: "Get", link: '/absch/nmcc/get' }
      ]
    },
    {
      text: "ABS Procedure",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/absch/pro/fields' },
        { text: "Search", link: '/absch/pro/solr' },
        { text: "Get", link: '/absch/pro/get' }
      ]
    },
    {
      text: 'Files & Attachments',
      collapsed: true,
      items: [
        { text: 'Document Attachments', link: '/absch/general/document-attachments' },
        { text: 'Temporary Files', link: '/absch/general/temporary-file' }
      ]
    },
    {
      text: 'Thesaurus',
      collapsed: true,
      items: [
        { text: "CBD Subjects", link: '/absch/thesaurus/cbd-subjects' },
        { text: "CBI Audience", link: '/absch/thesaurus/cbi-audience' },
        { text: "CBI Cats", link: '/absch/thesaurus/cbi-cats' },
        { text: "CBI CPB Types", link: '/absch/thesaurus/cbi-cpb-types' },
        { text: "CBI Funding Src", link: '/absch/thesaurus/cbi-funding-src' },
        { text: "CBI Status", link: '/absch/thesaurus/cbi-status' },
        { text: "GBF Targets", link: '/absch/thesaurus/gbf-targets' },
        { text: "General - Countries", link: '/absch/thesaurus/countries' },
        { text: "Jurisdictions", link: '/absch/thesaurus/jurisdictions' },
        { text: "Key Areas", link: '/absch/thesaurus/key-areas' },
        { text: "MCC Keywords", link: '/absch/thesaurus/mcc-keywords' },
        { text: "Measure - Statuses", link: '/absch/thesaurus/statuses' },
        { text: "Measure - Type of Documents", link: '/absch/thesaurus/type-of-documents' },
        { text: "Organization Types", link: '/absch/thesaurus/organization-types' },
        { text: "Permit - Permit Keywords (Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent)", link: '/absch/thesaurus/permit-keywords' },
        { text: "Permit - Permit Usage (Indicate if the permit or its equivalent covers commercial and/or non-commercial use)", link: '/absch/thesaurus/permit-usage' },
        { text: "Resource Type VLR", link: '/absch/thesaurus/resource-type-vlr' }
      ]
    }
  ],
  '/bch/': [
    gettingStarted('/bch'),
    user('/bch'),
    {
      text: "Contact",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/contact/fields' },
        { text: "List", link: '/bch/contact/list' },
        { text: "Search", link: '/bch/contact/solr' },
        { text: "Get", link: '/bch/contact/get' },
        { text: "Create", link: '/bch/contact/create' },
        { text: "Update", link: '/bch/contact/update' },
        { text: "Delete", link: '/bch/contact/delete' }
      ]
    },
    {
      text: "Organization",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/org/fields' },
        { text: "Search", link: '/bch/org/solr' },
        { text: "Get", link: '/bch/org/get' }
      ]
    },
    {
      text: "Virtual Library Resource",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/vlr/fields' },
        { text: "Search", link: '/bch/vlr/solr' },
        { text: "Get", link: '/bch/vlr/get' }
      ]
    },
    {
      text: "Capacity Development Initiative",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/cdi/fields' },
        { text: "Search", link: '/bch/cdi/solr' },
        { text: "Get", link: '/bch/cdi/get' }
      ]
    },
    {
      text: "Competent National Authority",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/cna/fields' },
        { text: "Search", link: '/bch/cna/solr' },
        { text: "Get", link: '/bch/cna/get' }
      ]
    },
    {
      text: "National Website or Database",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/ndb/fields' },
        { text: "Search", link: '/bch/ndb/solr' },
        { text: "Get", link: '/bch/ndb/get' }
      ]
    },
    {
      text: "National Focal Point",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/nfp/fields' },
        { text: "Search", link: '/bch/nfp/solr' },
        { text: "Get", link: '/bch/nfp/get' }
      ]
    },
    {
      text: "Decision",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/dec/fields' },
        { text: "Search", link: '/bch/dec/solr' },
        { text: "Get", link: '/bch/dec/get' }
      ]
    },
    {
      text: "Gene / DNA Sequence",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/gene/fields' },
        { text: "Search", link: '/bch/gene/solr' },
        { text: "Get", link: '/bch/gene/get' }
      ]
    },
    {
      text: "Independent Risk Assessment",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/ira/fields' },
        { text: "Search", link: '/bch/ira/solr' },
        { text: "Get", link: '/bch/ira/get' }
      ]
    },
    {
      text: "Law / Regulation",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/law/fields' },
        { text: "Search", link: '/bch/law/solr' },
        { text: "Get", link: '/bch/law/get' }
      ]
    },
    {
      text: "Living Modified Organism",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/bch/lmo/fields' },
        { text: "Search", link: '/bch/lmo/solr' },
        { text: "Get", link: '/bch/lmo/get' }
      ]
    },
    {
      text: 'Files & Attachments',
      collapsed: true,
      items: [
        { text: 'Document Attachments', link: '/bch/general/document-attachments' },
        { text: 'Temporary Files', link: '/bch/general/temporary-file' }
      ]
    },
    {
      text: 'Thesaurus',
      collapsed: true,
      items: [
        { text: "Biosafety Decision - Decision Results", link: '/bch/thesaurus/decision-results' },
        { text: "Biosafety Decision - Decision Types", link: '/bch/thesaurus/decision-types' },
        { text: "Biosafety Decision - Transboundary Movement Types", link: '/bch/thesaurus/transboundary-movement-types' },
        { text: "Biosafety Law - Legislation Agreement Types", link: '/bch/thesaurus/legislation-agreement-types' },
        { text: "CBD Subjects", link: '/bch/thesaurus/cbd-subjects' },
        { text: "CBI Audience", link: '/bch/thesaurus/cbi-audience' },
        { text: "CBI Cats", link: '/bch/thesaurus/cbi-cats' },
        { text: "CBI CPB Types", link: '/bch/thesaurus/cbi-cpb-types' },
        { text: "CBI Funding Src", link: '/bch/thesaurus/cbi-funding-src' },
        { text: "CBI Status", link: '/bch/thesaurus/cbi-status' },
        { text: "DNA Sequence - DNA Sequence Family", link: '/bch/thesaurus/dna-sequence-family' },
        { text: "GBF Targets", link: '/bch/thesaurus/gbf-targets' },
        { text: "General - Countries", link: '/bch/thesaurus/countries' },
        { text: "Independent Risk Assessment - Risk Assessment Scope", link: '/bch/thesaurus/risk-assessment-scope' },
        { text: "Key Areas", link: '/bch/thesaurus/key-areas' },
        { text: "Modified Organism - Organism Common Uses", link: '/bch/thesaurus/organism-common-uses' },
        { text: "Modified Organism - Technique Used", link: '/bch/thesaurus/technique-used' },
        { text: "Organization Types", link: '/bch/thesaurus/organization-types' },
        { text: "Resource Type VLR", link: '/bch/thesaurus/resource-type-vlr' }
      ]
    }
  ],
  '/chm/': [
    gettingStarted('/chm'),
    user('/chm'),
    {
      text: "Contact",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/chm/contact/fields' },
        { text: "List", link: '/chm/contact/list' },
        { text: "Search", link: '/chm/contact/solr' },
        { text: "Get", link: '/chm/contact/get' },
        { text: "Create", link: '/chm/contact/create' },
        { text: "Update", link: '/chm/contact/update' },
        { text: "Delete", link: '/chm/contact/delete' }
      ]
    },
    {
      text: "Organization",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/chm/org/fields' },
        { text: "Search", link: '/chm/org/solr' },
        { text: "Get", link: '/chm/org/get' }
      ]
    },
    {
      text: "Virtual Library Resource",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/chm/vlr/fields' },
        { text: "Search", link: '/chm/vlr/solr' },
        { text: "Get", link: '/chm/vlr/get' }
      ]
    },
    {
      text: "Capacity Development Initiative",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/chm/cdi/fields' },
        { text: "Search", link: '/chm/cdi/solr' },
        { text: "Get", link: '/chm/cdi/get' }
      ]
    },
    {
      text: 'Files & Attachments',
      collapsed: true,
      items: [
        { text: 'Document Attachments', link: '/chm/general/document-attachments' },
        { text: 'Temporary Files', link: '/chm/general/temporary-file' }
      ]
    },
    {
      text: 'Thesaurus',
      collapsed: true,
      items: [
        { text: "CBD Subjects", link: '/chm/thesaurus/cbd-subjects' },
        { text: "CBI Audience", link: '/chm/thesaurus/cbi-audience' },
        { text: "CBI Cats", link: '/chm/thesaurus/cbi-cats' },
        { text: "CBI CPB Types", link: '/chm/thesaurus/cbi-cpb-types' },
        { text: "CBI Funding Src", link: '/chm/thesaurus/cbi-funding-src' },
        { text: "CBI Status", link: '/chm/thesaurus/cbi-status' },
        { text: "GBF Targets", link: '/chm/thesaurus/gbf-targets' },
        { text: "General - Countries", link: '/chm/thesaurus/countries' },
        { text: "Key Areas", link: '/chm/thesaurus/key-areas' },
        { text: "Organization Types", link: '/chm/thesaurus/organization-types' },
        { text: "Resource Type VLR", link: '/chm/thesaurus/resource-type-vlr' }
      ]
    }
  ],
  '/ort/': [
    gettingStarted('/ort'),
    user('/ort'),
    {
      text: "National Report",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/ort/national-report/fields' },
        { text: "Search", link: '/ort/national-report/solr' },
        { text: "Get", link: '/ort/national-report/get' }
      ]
    },
    {
      text: "National Report Binary Indicator Data",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/ort/national-report-binary-indicator-data/fields' },
        { text: "Search", link: '/ort/national-report-binary-indicator-data/solr' },
        { text: "Get", link: '/ort/national-report-binary-indicator-data/get' }
      ]
    },
    {
      text: "National Report Indicator Data",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/ort/national-report-indicator-data/fields' },
        { text: "Search", link: '/ort/national-report-indicator-data/solr' },
        { text: "Get", link: '/ort/national-report-indicator-data/get' }
      ]
    },
    {
      text: "National Target",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/ort/national-target/fields' },
        { text: "Search", link: '/ort/national-target/solr' },
        { text: "Get", link: '/ort/national-target/get' }
      ]
    },
    {
      text: "National Target Mapping",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/ort/national-target-mapping/fields' },
        { text: "Search", link: '/ort/national-target-mapping/solr' },
        { text: "Get", link: '/ort/national-target-mapping/get' }
      ]
    },
    {
      text: "NBSAP",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/ort/nbsap/fields' },
        { text: "Search", link: '/ort/nbsap/solr' },
        { text: "Get", link: '/ort/nbsap/get' }
      ]
    },
    {
      text: "Stakeholder Commitment",
      collapsed: true,
      items: [
        { text: "Field Reference", link: '/ort/stakeholderCommitment/fields' },
        { text: "List", link: '/ort/stakeholderCommitment/list' },
        { text: "Search", link: '/ort/stakeholderCommitment/solr' },
        { text: "Get", link: '/ort/stakeholderCommitment/get' },
        { text: "Create", link: '/ort/stakeholderCommitment/create' },
        { text: "Update", link: '/ort/stakeholderCommitment/update' },
        { text: "Delete", link: '/ort/stakeholderCommitment/delete' }
      ]
    },
    {
      text: 'Files & Attachments',
      collapsed: true,
      items: [
        { text: 'Document Attachments', link: '/ort/general/document-attachments' },
        { text: 'Temporary Files', link: '/ort/general/temporary-file' }
      ]
    },
    {
      text: 'Thesaurus',
      collapsed: true,
      items: [
        { text: "Approving Body", link: '/ort/thesaurus/approving-body' },
        { text: "Approving Status", link: '/ort/thesaurus/approved-status' },
        { text: "Binary Indicator", link: '/ort/thesaurus/binary-indicator' },
        { text: "GBF Goals", link: '/ort/thesaurus/gbf-goals' },
        { text: "GBF Headline Indicators", link: '/ort/thesaurus/gbf-headline-indicators' },
        { text: "GBF Target Considerations", link: '/ort/thesaurus/gbf-target-considerations' },
        { text: "GBF Targets", link: '/ort/thesaurus/gbf-targets' },
        { text: "General - Countries", link: '/ort/thesaurus/countries' },
        { text: "Policy Instruments", link: '/ort/thesaurus/policy-instruments' },
        { text: "Report Status", link: '/ort/thesaurus/report-status' }
      ]
    }
  ],
  '/thesaurus/': [
    { text: 'Thesaurus', link: '/thesaurus/' },
    {
      text: 'A',
      collapsed: true,
      items: [
        { text: "Authority - ABS Functions", link: '/thesaurus/abs-functions' },
        { text: "Authority - ABS Genetic Resource Areas", link: '/thesaurus/abs-genetic-resource-areas' },
        { text: "Authority - ABS Genetic Resource Types", link: '/thesaurus/abs-genetic-resource-types' },
        { text: "Authority - ABS Jurisdictions", link: '/thesaurus/abs-jurisdictions' },
        { text: "ABS Subjects", link: '/thesaurus/abs-subjects' },
        { text: "Aichi Targets", link: '/thesaurus/aichi-targets' },
        { text: "All Keywords", link: '/thesaurus/all-keywords' },
        { text: "Approving Status", link: '/thesaurus/approved-status' },
        { text: "Approving Body", link: '/thesaurus/approving-body' },
        { text: "Assessment Policy", link: '/thesaurus/assessment-progress' },
        { text: "Authority - CBP Functions", link: '/thesaurus/cpb-functions' },
        { text: "Authority - CPB Organism Types", link: '/thesaurus/cpb-organism-types' },
        { text: "Authority - Keywords", link: '/thesaurus/keywords' }
      ]
    },
    {
      text: 'B',
      collapsed: true,
      items: [
        { text: "BCH RA Author Affiliation", link: '/thesaurus/bch-ra-author-affiliation' },
        { text: "BCH RA Subjects", link: '/thesaurus/bch-ra-subjects' },
        { text: "Binary Indicator", link: '/thesaurus/binary-indicator' },
        { text: "Biosafety Decision - Decision LMO FFP Subject", link: '/thesaurus/decision-lmo-ffp-subject' },
        { text: "Biosafety Decision - Decision Results", link: '/thesaurus/decision-results' },
        { text: "Biosafety Decision - Decision Types", link: '/thesaurus/decision-types' },
        { text: "Biosafety Law - Law Jurisdictions", link: '/thesaurus/law-jurisdictions' },
        { text: "Biosafety Law - Legislation Agreement Types", link: '/thesaurus/legislation-agreement-types' },
        { text: "Biosafety Law - Subject Areas", link: '/thesaurus/subject-areas' },
        { text: "Biosafety Decision - Transboundary Movement Types", link: '/thesaurus/transboundary-movement-types' },
        { text: "Biosafety Law - Type of Organisms", link: '/thesaurus/type-of-organisms' }
      ]
    },
    {
      text: 'C',
      collapsed: true,
      items: [
        { text: "CBD Subjects", link: '/thesaurus/cbd-subjects' },
        { text: "CBI Audience", link: '/thesaurus/cbi-audience' },
        { text: "CBI Cats", link: '/thesaurus/cbi-cats' },
        { text: "CBI CPB Types", link: '/thesaurus/cbi-cpb-types' },
        { text: "CBI Funding Src", link: '/thesaurus/cbi-funding-src' },
        { text: "CBI Status", link: '/thesaurus/cbi-status' },
        { text: "CBI Thematic Areas", link: '/thesaurus/cbi-thematic-areas' },
        { text: "Checkpoint - CP Jurisdiction", link: '/thesaurus/cp-jurisdiction' },
        { text: "CPB Thematic Areas", link: '/thesaurus/cpb-thematic-areas' },
        { text: "Checkpoint Communique - CPC Keywords", link: '/thesaurus/cpc-keywords' }
      ]
    },
    {
      text: 'D',
      collapsed: true,
      items: [
        { text: "DNA Sequence - DNA Sequence Family", link: '/thesaurus/dna-sequence-family' }
      ]
    },
    {
      text: 'G',
      collapsed: true,
      items: [
        { text: "General - Countries", link: '/thesaurus/countries' },
        { text: "GBF Complementary Indicators", link: '/thesaurus/gbf-complementary-indicators' },
        { text: "GBF Component Indicators", link: '/thesaurus/gbf-component-indicators' },
        { text: "GBF Degree of Alignment", link: '/thesaurus/gbf-degree-of-alignment' },
        { text: "GBF Goals", link: '/thesaurus/gbf-goals' },
        { text: "GBF Headline Indicators", link: '/thesaurus/gbf-headline-indicators' },
        { text: "GBF Target Considerations", link: '/thesaurus/gbf-target-considerations' },
        { text: "GBF Targets", link: '/thesaurus/gbf-targets' },
        { text: "General - Libraries", link: '/thesaurus/libraries' },
        { text: "General - Other", link: '/thesaurus/other' },
        { text: "General - Regions", link: '/thesaurus/regions' }
      ]
    },
    {
      text: 'I',
      collapsed: true,
      items: [
        { text: "Independent Risk Assessment - Risk Assessment Scope", link: '/thesaurus/risk-assessment-scope' }
      ]
    },
    {
      text: 'J',
      collapsed: true,
      items: [
        { text: "Jurisdictions", link: '/thesaurus/jurisdictions' }
      ]
    },
    {
      text: 'K',
      collapsed: true,
      items: [
        { text: "Key Areas", link: '/thesaurus/key-areas' }
      ]
    },
    {
      text: 'M',
      collapsed: true,
      items: [
        { text: "Measure - ABS Measures", link: '/thesaurus/abs-measures' },
        { text: "Measure - Document Links Ext", link: '/thesaurus/document-links-ext' },
        { text: "Measure - Languages", link: '/thesaurus/languages' },
        { text: "MCC Keywords", link: '/thesaurus/mcc-keywords' },
        { text: "Measure - Jurisdictions", link: '/thesaurus/msr-jurisdictions' },
        { text: "Modified Organism - Organism Common Uses", link: '/thesaurus/organism-common-uses' },
        { text: "Measure - Statuses", link: '/thesaurus/statuses' },
        { text: "Modified Organism - Technique Used", link: '/thesaurus/technique-used' },
        { text: "Measure - Translation Type", link: '/thesaurus/translation-type' },
        { text: "Measure - Type of Documents", link: '/thesaurus/type-of-documents' }
      ]
    },
    {
      text: 'O',
      collapsed: true,
      items: [
        { text: "Organization Types", link: '/thesaurus/organization-types' },
        { text: "ORT Jurisdictions", link: '/thesaurus/ort-jurisdictions' }
      ]
    },
    {
      text: 'P',
      collapsed: true,
      items: [
        { text: "Permit - Permit Keywords (Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent)", link: '/thesaurus/permit-keywords' },
        { text: "Permit - Permit Usage (Indicate if the permit or its equivalent covers commercial and/or non-commercial use)", link: '/thesaurus/permit-usage' },
        { text: "Policy Instruments", link: '/thesaurus/policy-instruments' }
      ]
    },
    {
      text: 'R',
      collapsed: true,
      items: [
        { text: "Report Status", link: '/thesaurus/report-status' },
        { text: "Resource Type VLR", link: '/thesaurus/resource-type-vlr' }
      ]
    },
    {
      text: 'S',
      collapsed: true,
      items: [
        { text: "Stakeholders", link: '/thesaurus/stakeholders' }
      ]
    },
    {
      text: 'T',
      collapsed: true,
      items: [
        { text: "Thematic Areas", link: '/thesaurus/thematic-areas' }
      ]
    }
  ]
} as Record<string, SidebarItem[]>
