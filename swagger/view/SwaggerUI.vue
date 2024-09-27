<template>
  <div class="mt-4" v-if="!isLoading">
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
      <div v-if="spec.protected && token">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="alert alert-success" role="alert">
                <div>
                  <p class="lh-lg">
                    <b>You have successfully logged in</b>, and an
                    authentication token is available in your cookie. This route
                    is protected, and access to this content requires a valid
                    token.
                  </p>
                  <p class="lh-lg">
                    The token is automatically used to authenticate API requests
                    made through Swagger. You can interact with the API and make
                    authorized calls using the token stored in your browser's
                    cookie.
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
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { APP_CONFIG } from "../../docs/app-config"
import { AuthManager } from "../../utils/auth-manager";
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

let token = ref(null)
let isLoading = ref(true);

const redirectToAccounts = () => {
  const currentUrl = window.location.href;
  const loginUrl = `${APP_CONFIG.ACCOUNTS_HOST_URL}/signin?returnUrl=${encodeURIComponent(currentUrl)}`;
  window.location.href = loginUrl;
};

const initializeSwaggerUI = () => {
  props.swaggerSpecs.forEach(async (swaggerSpec, index) => {
    const SwaggerUI = (await import("swagger-ui")).default;
     const domId = swaggerSpec.domId ? `${swaggerSpec.domId}-${index}` : `swagger-ui-${index}`;
    const ui = SwaggerUI({
      spec: swaggerSpec.json,
      dom_id: `#${domId}`,
      presets: [SwaggerUI.presets.apis, SwaggerUI.SwaggerUIStandalonePreset],
      layout: "BaseLayout",
    });

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
      const config = { childList: true, subtree: true };

      observer.observe(targetNode, config);
    } else {
      const observer = new MutationObserver(() => {
        const tryOutButtons = document.querySelectorAll(".try-out");
        tryOutButtons.forEach((button) => {
          button.disabled = true;
          button.title = "Authorization token is missing";
        });
      });

      const targetNode = document.getElementById(domId);
      const config = { childList: true, subtree: true };

      observer.observe(targetNode, config);
    }

    const observer = new MutationObserver(() => {
      const informationContainer = document.querySelector(
        ".information-container.wrapper"
      );
      if (informationContainer) {
        informationContainer.parentNode.removeChild(informationContainer);
      }
      const authorizeBtn = document.querySelector(".auth-wrapper");
      if (authorizeBtn) {
        authorizeBtn.parentNode.removeChild(authorizeBtn);
      }
    });

    const targetNode = document.getElementById(domId);
    const config = { childList: true, subtree: true };

    observer.observe(targetNode, config);
  });
};

onMounted(async () => {
  await import("bootstrap/dist/css/bootstrap.min.css");
  await import("bootstrap");

  const authManager = new AuthManager(APP_CONFIG.ACCOUNTS_HOST_URL);

  authManager.getScbdIframeToken().then(async (newToken) => {
    if(newToken){
      token.value = newToken;
      const user = await authManager.fetchUser();
      initializeSwaggerUI();
      injectLoggedInNavLink(user);
    }
    isLoading.value = false;
  })
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