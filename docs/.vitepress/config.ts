import { defineConfig } from "vitepress";
import { resolve } from "path";
import routes from "../../routes/index";

export default defineConfig({
  title: "API Documentation",
  base: process.env.BASE_PATH || "/",
  appearance: false,
  themeConfig: {
    aside: true,
    nav: [
      {
        text: "Home",
        link: "/",
      },
    ],
    sidebar: routes,
    search: {
      provider: "local",
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "../../"), 
      },
    },
  }    
});
