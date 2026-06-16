// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';

import "../../../style.css"

// Import your custom components
import SchemaRow from '../components/schema-row.vue'
import SchemaTable from '../components/schema-table.vue'

// Only import Bootstrap if not in server-side rendering (SSR)
if (!import.meta.env.SSR) {
  import('bootstrap/dist/css/bootstrap.min.css'); // Bootstrap CSS
  import('bootstrap'); // Bootstrap JS
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    // Register global components
    app.component('SchemaRow', SchemaRow)
    app.component('SchemaTable', SchemaTable)
  },
  setup() {
    // VPNavBarTitle doesn't expose a slot for a title/tooltip attribute,
    // so set it directly on the nav brand link.
    onMounted(() => {
      document.querySelector(".VPNavBarTitle .title")
        ?.setAttribute("title", "Clearing-House Documentation");
    });
  }
};