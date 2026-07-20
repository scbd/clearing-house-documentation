// Sidebar for the rebuilt documentation. It grows as record types are
// migrated from .archive/ — one record type per PR (see REBUILD.md).
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
    { text: 'Create', link: `${base}/contact/create` }
  ]
})

// Legacy page restored from .archive — every playground needs the auth guide.
// To be rebuilt with the Users record type.
const users: SidebarItem = {
  text: 'Users',
  collapsed: false,
  items: [
    { text: 'Authentication', link: '/absch/user/authentication' }
  ]
}

export default {
  '/': [],
  '/absch/': [users, contact('/absch')],
  '/bch/': [contact('/bch')]
} as Record<string, SidebarItem[]>
