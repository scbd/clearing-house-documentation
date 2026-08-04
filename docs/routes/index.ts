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
        { text: "List", link: '/absch/contact/list' },
        { text: "Search", link: '/absch/contact/solr' },
        { text: "Get", link: '/absch/contact/get' },
        { text: "Create", link: '/absch/contact/create' },
        { text: "Update", link: '/absch/contact/update' },
        { text: "Delete", link: '/absch/contact/delete' },
        { text: "Field Reference", link: '/absch/contact/fields' }
      ]
    },
    {
      text: "Organization",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/org/solr' },
        { text: "Get", link: '/absch/org/get' },
        { text: "Field Reference", link: '/absch/org/fields' }
      ]
    },
    {
      text: "Virtual Library Resource",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/vlr/solr' },
        { text: "Get", link: '/absch/vlr/get' },
        { text: "Field Reference", link: '/absch/vlr/fields' }
      ]
    },
    {
      text: "Capacity Development Initiative",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/cdi/solr' },
        { text: "Get", link: '/absch/cdi/get' },
        { text: "Field Reference", link: '/absch/cdi/fields' }
      ]
    },
    {
      text: "Competent National Authority",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/cna/solr' },
        { text: "Get", link: '/absch/cna/get' },
        { text: "Field Reference", link: '/absch/cna/fields' }
      ]
    },
    {
      text: "National Website or Database",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/ndb/solr' },
        { text: "Get", link: '/absch/ndb/get' },
        { text: "Field Reference", link: '/absch/ndb/fields' }
      ]
    },
    {
      text: "National Focal Point",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/nfp/solr' },
        { text: "Get", link: '/absch/nfp/get' },
        { text: "Field Reference", link: '/absch/nfp/fields' }
      ]
    },
    {
      text: "Checkpoint",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/cp/solr' },
        { text: "Get", link: '/absch/cp/get' },
        { text: "Field Reference", link: '/absch/cp/fields' }
      ]
    },
    {
      text: "Checkpoint Communique",
      collapsed: true,
      items: [
        { text: "List", link: '/absch/cpc/list' },
        { text: "Search", link: '/absch/cpc/solr' },
        { text: "Get", link: '/absch/cpc/get' },
        { text: "Create", link: '/absch/cpc/create' },
        { text: "Update", link: '/absch/cpc/update' },
        { text: "Delete", link: '/absch/cpc/delete' },
        { text: "Field Reference", link: '/absch/cpc/fields' }
      ]
    },
    {
      text: "Community Protocol",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/cpp/solr' },
        { text: "Get", link: '/absch/cpp/get' },
        { text: "Field Reference", link: '/absch/cpp/fields' }
      ]
    },
    {
      text: "Internationally Recognized Certificate of Compliance",
      collapsed: true,
      items: [
        { text: "List", link: '/absch/ircc/list' },
        { text: "Search", link: '/absch/ircc/solr' },
        { text: "Get", link: '/absch/ircc/get' },
        { text: "Create", link: '/absch/ircc/create' },
        { text: "Update", link: '/absch/ircc/update' },
        { text: "Delete", link: '/absch/ircc/delete' },
        { text: "Field Reference", link: '/absch/ircc/fields' }
      ]
    },
    {
      text: "Measure",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/msr/solr' },
        { text: "Get", link: '/absch/msr/get' },
        { text: "Field Reference", link: '/absch/msr/fields' }
      ]
    },
    {
      text: "National Model Contractual Clause",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/nmcc/solr' },
        { text: "Get", link: '/absch/nmcc/get' },
        { text: "Field Reference", link: '/absch/nmcc/fields' }
      ]
    },
    {
      text: "ABS Procedure",
      collapsed: true,
      items: [
        { text: "Search", link: '/absch/pro/solr' },
        { text: "Get", link: '/absch/pro/get' },
        { text: "Field Reference", link: '/absch/pro/fields' }
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
        { text: "List", link: '/bch/contact/list' },
        { text: "Search", link: '/bch/contact/solr' },
        { text: "Get", link: '/bch/contact/get' },
        { text: "Create", link: '/bch/contact/create' },
        { text: "Update", link: '/bch/contact/update' },
        { text: "Delete", link: '/bch/contact/delete' },
        { text: "Field Reference", link: '/bch/contact/fields' }
      ]
    },
    {
      text: "Organization",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/org/solr' },
        { text: "Get", link: '/bch/org/get' },
        { text: "Field Reference", link: '/bch/org/fields' }
      ]
    },
    {
      text: "Virtual Library Resource",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/vlr/solr' },
        { text: "Get", link: '/bch/vlr/get' },
        { text: "Field Reference", link: '/bch/vlr/fields' }
      ]
    },
    {
      text: "Capacity Development Initiative",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/cdi/solr' },
        { text: "Get", link: '/bch/cdi/get' },
        { text: "Field Reference", link: '/bch/cdi/fields' }
      ]
    },
    {
      text: "Competent National Authority",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/cna/solr' },
        { text: "Get", link: '/bch/cna/get' },
        { text: "Field Reference", link: '/bch/cna/fields' }
      ]
    },
    {
      text: "National Website or Database",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/ndb/solr' },
        { text: "Get", link: '/bch/ndb/get' },
        { text: "Field Reference", link: '/bch/ndb/fields' }
      ]
    },
    {
      text: "National Focal Point",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/nfp/solr' },
        { text: "Get", link: '/bch/nfp/get' },
        { text: "Field Reference", link: '/bch/nfp/fields' }
      ]
    },
    {
      text: "Decision",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/dec/solr' },
        { text: "Get", link: '/bch/dec/get' },
        { text: "Field Reference", link: '/bch/dec/fields' }
      ]
    },
    {
      text: "Gene / DNA Sequence",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/gene/solr' },
        { text: "Get", link: '/bch/gene/get' },
        { text: "Field Reference", link: '/bch/gene/fields' }
      ]
    },
    {
      text: "Independent Risk Assessment",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/ira/solr' },
        { text: "Get", link: '/bch/ira/get' },
        { text: "Field Reference", link: '/bch/ira/fields' }
      ]
    },
    {
      text: "Law / Regulation",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/law/solr' },
        { text: "Get", link: '/bch/law/get' },
        { text: "Field Reference", link: '/bch/law/fields' }
      ]
    },
    {
      text: "Living Modified Organism",
      collapsed: true,
      items: [
        { text: "Search", link: '/bch/lmo/solr' },
        { text: "Get", link: '/bch/lmo/get' },
        { text: "Field Reference", link: '/bch/lmo/fields' }
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
        { text: "List", link: '/chm/contact/list' },
        { text: "Search", link: '/chm/contact/solr' },
        { text: "Get", link: '/chm/contact/get' },
        { text: "Create", link: '/chm/contact/create' },
        { text: "Update", link: '/chm/contact/update' },
        { text: "Delete", link: '/chm/contact/delete' },
        { text: "Field Reference", link: '/chm/contact/fields' }
      ]
    },
    {
      text: "Organization",
      collapsed: true,
      items: [
        { text: "Search", link: '/chm/org/solr' },
        { text: "Get", link: '/chm/org/get' },
        { text: "Field Reference", link: '/chm/org/fields' }
      ]
    },
    {
      text: "Virtual Library Resource",
      collapsed: true,
      items: [
        { text: "Search", link: '/chm/vlr/solr' },
        { text: "Get", link: '/chm/vlr/get' },
        { text: "Field Reference", link: '/chm/vlr/fields' }
      ]
    },
    {
      text: "Capacity Development Initiative",
      collapsed: true,
      items: [
        { text: "Search", link: '/chm/cdi/solr' },
        { text: "Get", link: '/chm/cdi/get' },
        { text: "Field Reference", link: '/chm/cdi/fields' }
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
        { text: "Search", link: '/ort/national-report/solr' },
        { text: "Get", link: '/ort/national-report/get' },
        { text: "Field Reference", link: '/ort/national-report/fields' }
      ]
    },
    {
      text: "National Report Binary Indicator Data",
      collapsed: true,
      items: [
        { text: "Search", link: '/ort/national-report-binary-indicator-data/solr' },
        { text: "Get", link: '/ort/national-report-binary-indicator-data/get' },
        { text: "Field Reference", link: '/ort/national-report-binary-indicator-data/fields' }
      ]
    },
    {
      text: "National Report Indicator Data",
      collapsed: true,
      items: [
        { text: "Search", link: '/ort/national-report-indicator-data/solr' },
        { text: "Get", link: '/ort/national-report-indicator-data/get' },
        { text: "Field Reference", link: '/ort/national-report-indicator-data/fields' }
      ]
    },
    {
      text: "National Target",
      collapsed: true,
      items: [
        { text: "Search", link: '/ort/national-target/solr' },
        { text: "Get", link: '/ort/national-target/get' },
        { text: "Field Reference", link: '/ort/national-target/fields' }
      ]
    },
    {
      text: "National Target Mapping",
      collapsed: true,
      items: [
        { text: "Search", link: '/ort/national-target-mapping/solr' },
        { text: "Get", link: '/ort/national-target-mapping/get' },
        { text: "Field Reference", link: '/ort/national-target-mapping/fields' }
      ]
    },
    {
      text: "NBSAP",
      collapsed: true,
      items: [
        { text: "Search", link: '/ort/nbsap/solr' },
        { text: "Get", link: '/ort/nbsap/get' },
        { text: "Field Reference", link: '/ort/nbsap/fields' }
      ]
    },
    {
      text: "Stakeholder Commitment",
      collapsed: true,
      items: [
        { text: "List", link: '/ort/stakeholderCommitment/list' },
        { text: "Search", link: '/ort/stakeholderCommitment/solr' },
        { text: "Get", link: '/ort/stakeholderCommitment/get' },
        { text: "Create", link: '/ort/stakeholderCommitment/create' },
        { text: "Update", link: '/ort/stakeholderCommitment/update' },
        { text: "Delete", link: '/ort/stakeholderCommitment/delete' },
        { text: "Field Reference", link: '/ort/stakeholderCommitment/fields' }
      ]
    }
  ]
} as Record<string, SidebarItem[]>
