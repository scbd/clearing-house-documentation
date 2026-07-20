// Sidebar for the rebuilt documentation. It grows as record types are
// migrated from .archive/ — one record type per PR (see REBUILD.md).
// The previous hand-maintained sidebars are in .archive/routes/ for reference.

interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

export default {
  '/': []
} as Record<string, SidebarItem[]>
