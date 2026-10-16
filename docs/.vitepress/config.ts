import { defineConfig } from "vitepress";
import { resolve } from "path";
import routes from "../routes/index";

export default defineConfig({
  title: "CH documentation",
  base: process.env.BASE_PATH || "/",
  // Everything under docs/ that isn't a site page: ADRs are internal
  // documentation; components/swagger/utils/routes are the docs app's
  // source (markdown partials in components/ must not become pages).
  srcExclude: ["adr/**", "components/**", "swagger/**", "utils/**", "routes/**"],
  appearance: true,
  head: [
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-6EJJLWGHYC" }],
    ["script", {}, "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6EJJLWGHYC');"],
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
    siteTitle: "CH documentation",
    aside: true,
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Thesaurus",
        link: "/thesaurus/",
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
        "@": resolve(__dirname, "../"),
      },
    },
  }    
});
