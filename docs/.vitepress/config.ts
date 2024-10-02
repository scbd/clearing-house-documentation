import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import absRoute from "../../routes/abs.js";
import bchRoute from "../../routes/bch.js";
import chmRoute from "../../routes/chm.js";
import commonRoutes from "../../routes/common.js";

interface MenuItem {
  text: string;
  collapsed?: boolean;
  link?: string;
  items?: MenuItem[];
}

interface SpecificRouteMenuItem {
  text: string;
  collapsed: boolean;
  items: {
    text: string;
    link: string;
  }[];
}

function insertRoutes(baseRoutes, routesToInsert) {
  const schemaIndex = baseRoutes["/"].findIndex((route) => route.text === "Users");
  if (schemaIndex > -1) {
    baseRoutes["/"].splice(schemaIndex + 1, 0, ...routesToInsert);
  }
  return baseRoutes;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const clearingHouse: string | undefined = env.VITE_CLEARING_HOUSE?.trim();

  let sidebar: MenuItem;
  let specificRoutes: SpecificRouteMenuItem[];

  if (clearingHouse === "abs") specificRoutes = absRoute;
  if (clearingHouse === "bch") specificRoutes = bchRoute;
  if (clearingHouse === "chm") specificRoutes = chmRoute;

  if (specificRoutes) {
    sidebar = insertRoutes(commonRoutes, specificRoutes);
  }

  if (!sidebar) {
    throw new Error("Invalid clearing house value");
  }

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    title: "API Documentation",
    appearance: false,
    themeConfig: {
      aside: true,
      logo: false,
      nav: [
        {
          text: "Home",
          link: "/",
        },
      ],
      sidebar: sidebar as DefaultTheme.Sidebar,
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
  };
});
