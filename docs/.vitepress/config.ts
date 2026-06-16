import { defineConfig } from "vitepress";
import { resolve } from "path";
import routes from "../../routes/index";

export default defineConfig({
  title: "CH documentation",
  base: process.env.BASE_PATH || "/",
  appearance: false,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "CH documentation",
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
