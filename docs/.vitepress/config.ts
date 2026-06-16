import { defineConfig } from "vitepress";
import { resolve } from "path";
import routes from "../../routes/index";

export default defineConfig({
  title: "CBD Developers",
  base: process.env.BASE_PATH || "/",
  appearance: true,
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "CBD Developers",
    aside: true,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Developer hub",
        link: "https://developer.cbd.int/",
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
