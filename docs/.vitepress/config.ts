import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import routes from "../../routes/index";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname, "../"), "");

  const mandatoryEnvVars = ['VITE_ACCOUNTS_HOST_URL', 'VITE_API_URL'];

  // Run validation on environment variables
  validateEnv(env, mandatoryEnvVars);

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
