// Sidebar for the rebuilt documentation. It grows as record types are
// migrated from .archive/ — one reviewed step at a time (see REBUILD.md).
// The previous hand-maintained sidebars are in .archive/routes/ for reference.

interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

const contact = (base: string): SidebarItem => ({
  text: 'Contact',
  collapsed: false,
  items: [
    { text: 'Create', link: `${base}/contact/create` },
    { text: 'Get', link: `${base}/contact/get` },
    { text: 'Update', link: `${base}/contact/update` },
    { text: 'Delete', link: `${base}/contact/delete` },
    { text: 'List', link: `${base}/contact/list` },
    { text: 'Search', link: `${base}/contact/solr` },
    { text: 'Field Reference', link: `${base}/contact/fields` }
  ]
})

export default {
  '/': [],
  '/absch/': [contact('/absch')],
  '/bch/': [contact('/bch')],
  '/chm/': [contact('/chm')]
} as Record<string, SidebarItem[]>
