import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import absRoute from "../../routes/abs.js";
import bchRoute from "../../routes/bch.js";
import chmRoute from "../../routes/chm.js";
import commonRoutes from "../../routes/common.js";

function insertRoutes(baseRoutes, routesToInsert) {
  const schemaIndex = baseRoutes["/"].findIndex(
    (route) => route.text === "Users"
  );
  if (schemaIndex > -1) {
    baseRoutes["/"].splice(schemaIndex + 1, 0, ...routesToInsert);
  }
  return baseRoutes;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname, "../"), "");

  const mandatoryEnvVars = ['VITE_ACCOUNTS_HOST_URL', 'VITE_API_URL'];

  // Run validation on environment variables
  validateEnv(env, mandatoryEnvVars);

  const clearingHouse = env.VITE_CLEARING_HOUSE?.trim();

  let sidebar;
  let specificRoutes;
  if (clearingHouse === "abs") specificRoutes = absRoute;
  if (clearingHouse === "chm") specificRoutes = chmRoute;
  if (clearingHouse === "bch") specificRoutes = bchRoute;

  sidebar = insertRoutes(commonRoutes, specificRoutes);

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
      sidebar,
      search: {
        provider: "local",
      },
    },
    vite: {
      resolve: {
        alias: {
          "@": resolve(__dirname, "../../"), //absolute path to root
        },
      },
    },
  };
});

// // Function to validate the existence of mandatory env variables
const validateEnv = (env, vars) => {
  vars.forEach((variable) => {
    if (!env[variable]) {
      throw new Error(`Missing mandatory environment variable: ${variable}`);
    }
  });
};