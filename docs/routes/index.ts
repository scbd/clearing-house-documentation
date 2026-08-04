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

const contact = (base: string): SidebarItem => ({
  text: 'Contact',
  collapsed: false,
  items: [
    { text: 'List', link: `${base}/contact/list` },
    { text: 'Search', link: `${base}/contact/solr` },
    { text: 'Get', link: `${base}/contact/get` },
    { text: 'Create', link: `${base}/contact/create` },
    { text: 'Update', link: `${base}/contact/update` },
    { text: 'Delete', link: `${base}/contact/delete` },
    { text: 'Field Reference', link: `${base}/contact/fields` }
  ]
})

export default {
  '/': [],
  '/absch/': [gettingStarted('/absch'), user('/absch'), contact('/absch')],
  '/bch/': [gettingStarted('/bch'), user('/bch'), contact('/bch')],
  '/chm/': [gettingStarted('/chm'), user('/chm'), contact('/chm')],
  '/ort/': [gettingStarted('/ort'), user('/ort')]
} as Record<string, SidebarItem[]>
