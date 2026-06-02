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
    // Validate mandatory environment variables at runtime
    if (!import.meta.env.SSR) {
      const mandatoryEnvVars = [
        'VITE_ACCOUNTS_HOST_URL', 
        'VITE_API_URL',
        'VITE_ABS_URL',
        'VITE_BCH_URL',
        'VITE_CHM_URL',
        'VITE_ORT_URL'
      ];
      mandatoryEnvVars.forEach((variable) => {
        if (!import.meta.env[variable]) {
          console.error(`Missing mandatory environment variable: ${variable}`);
        }
      });
    }

    // Register global components
    app.component('SchemaRow', SchemaRow)
    app.component('SchemaTable', SchemaTable)
    // Add onMounted here if needed for further setup
    onMounted(async () => {
      // Import the global CSS and JS for Bootstrap
      
    });
  }
};