<template>
  <div class="mt-4" v-show="!isLoading && !isError">
    <div class="alert alert-info" role="alert">
      This playground connects to the {{ isProductionApi ? "production" : "test" }} environment (<code>{{ apiHost }}</code>).
      <span v-if="isProductionApi">Requests made here affect real, live data.</span>
    </div>
    <div v-for="(spec, index) in swaggerSpecs" :key="index">
      <div v-if="spec.protected && !token">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="alert alert-primary" role="alert">
                <div>
                  <p>
                    This is a protected route. To access this content, you need
                    to be logged in. Logging in will provide you with an
                    authentication token, which is required for making API
                    calls.
                  </p>
                </div>
                <button class="btn btn-primary ml-3" @click="redirectToAccounts">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="spec.protected && token && user">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="alert alert-success" role="alert">
                <div>
                  <p class="lh-lg">
                    Welcome <strong>{{user.name}}</strong>, <br>You are connected to
                    <strong>{{ realmConfig?.displayName || "this site" }}</strong>.
                    <span v-if="realmRoles.length > 0">You currently have the following roles on this realm.</span>
                  </p>
                  <p v-if="realmRoles.length > 0">
                    <small>
                      <ul>
                        <li class="list-group-item"
                          v-for="(role, index) in realmRoles" :key="index">
                          {{index+1}}. {{ role }}
                        </li>
                      </ul>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!canRunPlayground" class="alert alert-danger mx-2" role="alert">
            <b>You don't have rights on your user roles to access this playground.</b>
            <p v-if="schemaDetails?.nationalAuthorizedUser?.length > 0">
              To run playground for {{ schemaDetails.title }} schema you must have one of the following roles:<br>
              {{ schemaDetails.nationalAuthorizedUser.join(", ") }}.
            </p>
        </div>
      </div>
      <div
        :id="spec.domId ? `${spec.domId}-${index}` : `swagger-ui-${index}`"
        :class="{ 'tryout-locked': spec.protected && (!token || !canRunPlayground) }"
      ></div>
    </div>
  </div>
  <div v-show="isLoading">
    <div class="container mt-5">
      <div class="row">
        <div class="col text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
          <div class="mt-2">Swagger playground is loading, please wait...</div>
        </div>
      </div>
    </div>    
  </div>
  <div v-show="isError">
    <div class="alert alert-danger" role="alert">
      An error occurred while loading Swagger playground, please refresh the page.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { APP_CONFIG } from "../../app-config";
import { AuthManager } from "../../utils/auth-manager";
import "../../style.css";

const props = defineProps({
  swaggerSpecs: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (spec) =>
          typeof spec.json === "object" &&
          typeof spec.protected === "boolean" &&
          (!spec.domId || typeof spec.domId === "string")
      ),
  },
});

const apiHost = new URL(APP_CONFIG.API_URL).hostname;
const isProductionApi = apiHost.endsWith("cbd.int");

const token = ref(null);
const isLoading = ref(true);
const isError = ref(false);
const user = ref(null);
const realmConfig = ref(null);

const APP_HOSTS = {
  absch: APP_CONFIG.ABS_URL,
  bch: APP_CONFIG.BCH_URL,
  chm: APP_CONFIG.CHM_URL,
  ort: APP_CONFIG.ORT_URL,
};

// The first matching path segment identifies the app (e.g. /absch/pro/get).
const fetchRealmConfiguration = async () => {
  const appSegment = window.location.pathname
    .split("/")
    .find((segment) => APP_HOSTS[segment]);
  if (!appSegment) return null;

  const host = new URL(APP_HOSTS[appSegment]).hostname;
  const response = await axios.get(
    `${APP_CONFIG.API_URL}/api/v2018/realm-configurations/${host}`
  );
  return Array.isArray(response.data) ? response.data[0] : response.data;
};

// User roles that exist in the current realm's configuration.
const realmRoles = computed(() => {
  const configuredRoles = Object.values(realmConfig.value?.roles || {}).flat();
  return (user.value?.roles || []).filter((role) => configuredRoles.includes(role));
})

const schemaDetails = computed(() => {
  return props.swaggerSpecs[0].json?.schemaDetails;
})

const canRunPlayground = computed(() => {
  if(props.swaggerSpecs[0].json?.schemaDetails?.nationalAuthorizedUser === undefined){
    return true; // If no publishing authorities defined, allow access
  }
  const nationalAuthorizedUser = props.swaggerSpecs[0].json?.schemaDetails?.nationalAuthorizedUser || [];
  return user.value?.roles?.some(role => nationalAuthorizedUser.includes(role)) || false;
});

const redirectToAccounts = () => {
  const currentUrl = window.location.href;
  const loginUrl = `${APP_CONFIG.ACCOUNTS_HOST_URL}/signin?returnUrl=${encodeURIComponent(currentUrl)}`;
  window.location.href = loginUrl;
};

const initializeSwaggerUI = async () => {
  // Lazy load swagger files to prevent the JavaScript from freezing when the files are loading.
  const swaggerFiles = await lazyLoadSwaggerFiles()
  const { SwaggerUIBundle, SwaggerUIStandalonePreset } = swaggerFiles

  const promises = props.swaggerSpecs.map(async (swaggerSpec, index) => {
    const domId = swaggerSpec.domId ? `${swaggerSpec.domId}-${index}` : `swagger-ui-${index}`;

    // Initialize Swagger UI
    const ui = SwaggerUIBundle({
      spec: swaggerSpec.json,
      dom_id: `#${domId}`,
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      layout: "BaseLayout",
    });

    // Preauthorize protected specs. Hiding the info/auth blocks and disabling
    // "Try it out" for unauthorized users is done in CSS (see <style>) — the
    // old per-mutation observers re-ran on every keystroke and caused flicker.
    if (swaggerSpec.protected && token.value) {
      ui.initOAuth({
        scopeSeparator: " ",
        additionalQueryStringParams: {},
      });
      const prefixedAuthToken = `Ticket ${token.value}`;
      ui.preauthorizeApiKey("ApiKeyAuth", prefixedAuthToken);
    }
    return true;
  });

  // Wait for all Swagger UI setups to complete
  return await Promise.all(promises);
};

onMounted(async () => {
  const authManager = new AuthManager(APP_CONFIG.ACCOUNTS_HOST_URL);

  try {
    isError.value = false;
    const newToken = await authManager.getScbdIframeToken();
    
    if (newToken) {
      token.value = newToken;
      const loggedInUser = await authManager.fetchUser();

      if (loggedInUser.isAuthenticated) {
        user.value = loggedInUser;

        // Realm config failure only hides the roles list; it must not break the playground.
        realmConfig.value = await fetchRealmConfiguration().catch((error) => {
          console.error("Failed to load realm configuration", error); // eslint-disable-line no-console -- show error in console
          return null;
        });

        injectLoggedInNavLink(loggedInUser);
      } else {
        token.value = null;
      }
    }  

    // Await Swagger UI initialization
    await initializeSwaggerUI();  
  } catch (error) {
    isError.value = true;
    console.error(error) // eslint-disable-line no-console -- show error in console
  } finally {
    isLoading.value = false;
  }
});

const injectLoggedInNavLink = (user) => {
  const isNavLinkExist = document.querySelector(".navbar-link");

  if(!isNavLinkExist){
    // Select the nav menu using querySelector
    const navMenu = document.querySelector(".VPNavBarMenu.menu");
  
    if (navMenu) {
      // Create a new anchor element
      const loggedInLink = document.createElement("p");
      loggedInLink.classList.add("VPLink", "link", "navbar-link");
      // loggedInLink.href = "/";
      
      // Create a span element for the "Logged In" text
      const loggedInSpan = document.createElement("span");
      loggedInSpan.textContent = `Welcome ${user.name}`;
  
      // Append the span to the anchor element
      loggedInLink.appendChild(loggedInSpan);
  
      // Insert the new link after the Home link
      navMenu.appendChild(loggedInLink);
    } else {
      console.error("Navigation menu not found.");
    }
  }
}

// Lazy load swagger files to prevent the JavaScript from
// freezing when the files are loading.
const lazyLoadSwaggerFiles = async () => {
  const errorString = 'Error loading file:'

  const css = import('swagger-ui/dist/swagger-ui.css')

  const bundle = import('swagger-ui-dist/swagger-ui-bundle.js')
    .catch(error => console.error(errorString, error)) // eslint-disable-line no-console -- show error in console

  const preset = import('swagger-ui-dist/swagger-ui-standalone-preset.js')
    .catch(error => console.error(errorString, error)) // eslint-disable-line no-console -- show error in console

  const files = await Promise.all([bundle, preset, css])

  const [SwaggerUIBundle, SwaggerUIStandalonePreset] = files

  return { SwaggerUIBundle: SwaggerUIBundle.default, SwaggerUIStandalonePreset: SwaggerUIStandalonePreset.default }
}
</script>

<style scoped>
/* Replaces the old MutationObserver DOM surgery: hide Swagger's own info and
   authorize blocks, and disable "Try it out" where the user isn't authorized. */
:deep(.swagger-ui .information-container),
:deep(.swagger-ui .auth-wrapper) {
  display: none;
}

.tryout-locked :deep(.try-out__btn) {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
