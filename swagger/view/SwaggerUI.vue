<template>
  <div class="mt-4">
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
                <button class="btn btn-primary ml-3" @click="redirectToAccountsForSingleSignOn">
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
                  <p class="lh-lg">
                    If you encounter any issues, ensure that your token is still
                    valid and has not expired. If necessary, you can
                    re-authenticate by clicking the login button to obtain a new
                    token.
                  </p>
                  <button
                    class="btn btn-success btn-block ml-3 mt-3"
                    @click="redirectToAccountsForSingleSignOn"
                  >
                    Login
                  </button>
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
import {AuthManager} from "../../utils/auth";
import axios from "axios";
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

const loginUrl = ref("");
let token = ref(null)
let maxAge = null;

const redirectToAccountsForSingleSignOn = () => {
  const currentUrl = window.location.href;
  const loginUrl = `https://accounts.cbddev.xyz/signin?returnUrl=${encodeURIComponent(currentUrl)}`;
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
        clientId: "your-client-id",
        clientSecret: "your-client-secret",
        realm: "your-realms",
        appName: "your-app-name",
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
  loginUrl.value = `https://accounts.cbddev.xyz/app/authorize.html`;
  await import("bootstrap/dist/css/bootstrap.min.css");
  await import("bootstrap");

  const authManager = new AuthManager();

  authManager.getScbdIframeToken().then((newToken) => {
    if(newToken){
      token.value = newToken;
      initializeSwaggerUI();
    }
  })
});
</script>

<style scoped>
.login-iframe-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.login-iframe {
  width: 80%;
  height: 80%;
  border: none;
}
</style>