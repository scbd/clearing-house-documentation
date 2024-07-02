import { defineConfig, loadEnv } from "vite";
import absRoute from "../../routes/abs.js";
import bchRoute from "../../routes/bch.js";
import chmRoute from "../../routes/chm.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const clearingHouse = env.VITE_CLEARING_HOUSE?.trim();

  let sidebar;
  if (clearingHouse === "abs") sidebar = absRoute;
  if (clearingHouse === "chm") sidebar = chmRoute;
  if (clearingHouse === "bch") sidebar = bchRoute;

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
      aside: false,
      logo: false,
      nav: [
        {
          text: "Home",
          link: "/",
        },
      ],
      sidebar,
      search: {
        provider: "local",
      },
    },
  };
});
