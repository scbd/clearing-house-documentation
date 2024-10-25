<template>
  <div class="mt-4" v-show="!isLoading && !isError">
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
                    Welcome {{user.name}}, you are connected to the test site.
                  </p>
                  <p v-if="devRoles.length > 0">
                    You currently have {{ devRoles.join(", ") }} roles on the test site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :id="spec.domId ? `${spec.domId}-${index}` : `swagger-ui-${index}`"></div>
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
      An error occurred while loading Swagger playgroud, please refresh the page.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { APP_CONFIG } from "../../docs/app-config"
import { AuthManager } from "../../utils/auth-manager";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
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

const token = ref(null)
const isLoading = ref(true);
const isError = ref(null);
const user = ref(null);

const devRoles = computed(() => {
  return user.value.roles.filter(role => role.includes("dev"));
})

const redirectToAccounts = () => {
  const currentUrl = window.location.href;
  const loginUrl = `${APP_CONFIG.ACCOUNTS_HOST_URL}/signin?returnUrl=${encodeURIComponent(currentUrl)}`;
  window.location.href = loginUrl;
};

const initializeSwaggerUI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const promises = props.swaggerSpecs.map(async (swaggerSpec, index) => {
        const domId = swaggerSpec.domId ? `${swaggerSpec.domId}-${index}` : `swagger-ui-${index}`;

        // Initialize Swagger UI
        const ui = SwaggerUI({
          spec: swaggerSpec.json,
          dom_id: `#${domId}`,
          presets: [SwaggerUI.presets.apis, SwaggerUI.SwaggerUIStandalonePreset],
          layout: "BaseLayout",
        });

        // Handling protected APIs with token
        if (swaggerSpec.protected && token.value) {
          ui.initOAuth({
            scopeSeparator: " ",
            additionalQueryStringParams: {},
          });
          const prefixedAuthToken = `Ticket ${token.value}`;
          ui.preauthorizeApiKey("ApiKeyAuth", prefixedAuthToken);

          const observer = new MutationObserver(() => {
            const tryOutButtons = document.querySelectorAll(".try-out");
            tryOutButtons.forEach((button) => {
              button.disabled = false;
            });
          });

          const targetNode = document.getElementById(domId);
          if (targetNode) {
            observer.observe(targetNode, { childList: true, subtree: true });
          }
        } else {
          const observer = new MutationObserver(() => {
            const tryOutButtons = document.querySelectorAll(".try-out");
            tryOutButtons.forEach((button) => {
              button.disabled = true;
              button.title = "Authorization token is missing";
            });
          });

          const targetNode = document.getElementById(domId);
          if (targetNode) {
            observer.observe(targetNode, { childList: true, subtree: true });
          }
        }

        // Observer for removing unwanted elements
        const observer = new MutationObserver(() => {
          const informationContainer = document.querySelector(".information-container.wrapper");
          if (informationContainer) {
            informationContainer.parentNode.removeChild(informationContainer);
          }
          const authorizeBtn = document.querySelector(".auth-wrapper");
          if (authorizeBtn) {
            authorizeBtn.parentNode.removeChild(authorizeBtn);
          }
        });

        const targetNode = document.getElementById(domId);
        if (targetNode) {
          observer.observe(targetNode, { childList: true, subtree: true });
        }
        return true;
      });

      // Wait for all Swagger UI setups to complete
      await Promise.all(promises);
      resolve();  // Resolve when all the initialization is complete
    } catch (error) {
      reject(error);  // Reject in case of any error
    }
  });
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

        // Await Swagger UI initialization
        await initializeSwaggerUI();

        injectLoggedInNavLink(loggedInUser);
      } else {
        token.value = null;
      }
    }    
  } catch (error) {
    isError.value = true;
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
</script>

<style scoped>
</style>