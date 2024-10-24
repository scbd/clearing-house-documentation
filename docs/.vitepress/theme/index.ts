// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';

import "../../../style.css"

// Only import Bootstrap if not in server-side rendering (SSR)
if (!import.meta.env.SSR) {
  import('bootstrap/dist/css/bootstrap.min.css'); // Bootstrap CSS
  import('bootstrap'); // Bootstrap JS
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Add onMounted here if needed for further setup
    onMounted(async () => {
      // Import the global CSS and JS for Bootstrap
      
    });
  }
};