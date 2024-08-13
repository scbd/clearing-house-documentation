<template>
  <div class="mt-4">
    <div v-for="(spec, index) in swaggerSpecs" :key="index">
      <div v-if="spec.protected && !authToken">
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
                <button class="btn btn-primary ml-3" @click="showLoginIframe">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showIframe" class="login-iframe-container">
        <iframe :src="loginUrl" class="login-iframe"></iframe>
      </div>
      <div v-if="spec.protected && authToken">
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
                    @click="showLoginIframe"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :id="spec.domId ? `${spec.domId}-${index}` : `swagger-ui-${index}`"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const authToken = ref(null);
const showIframe = ref(false);
const loginUrl = ref("");

const showLoginIframe = () => {
  showIframe.value = true;
};

const handleMessage = (event) => {
  if (event.origin === "http://localhost:8080") {
    if (event.data.type === "close") {
      showIframe.value = false;
    }
    if (event.data.type === "loginSuccess" && event.data.token) {
      setCookie("authToken", event.data.token, 7);
      authToken.value = event.data.token;
      showIframe.value = false;
      initializeSwaggerUI();
    }
  }
};

const initializeSwaggerUI = () => {
  props.swaggerSpecs.forEach(async (swaggerSpec, index) => {
    const SwaggerUI = (await import("swagger-ui")).default;
    const domId = swaggerSpec.domId
      ? `${swaggerSpec.domId}-${index}`
      : `swagger-ui-${index}`;
    const ui = SwaggerUI({
      spec: swaggerSpec.json,
      dom_id: `#${domId}`,
      presets: [SwaggerUI.presets.apis, SwaggerUI.SwaggerUIStandalonePreset],
      layout: "BaseLayout",
    });

    if (swaggerSpec.protected && authToken.value) {
      ui.initOAuth({
        clientId: "your-client-id",
        clientSecret: "your-client-secret",
        realm: "your-realms",
        appName: "your-app-name",
        scopeSeparator: " ",
        additionalQueryStringParams: {},
      });
      const prefixedAuthToken = `Ticket ${authToken.value}`;
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

const checkForToken = () => {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      setCookie("authToken", token, 7); // Set cookie for 7 days
      window.location.href = window.location.href.split("?")[0]; // Redirect to the home page
    } else {
      authToken.value = getCookie("authToken");
    }
  }
};

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

onMounted(async () => {
  loginUrl.value = `http://localhost:8080?redirect=${encodeURIComponent(
    window.location.href
  )}`;
  await import("bootstrap/dist/css/bootstrap.min.css");
  await import("bootstrap");

  checkForToken();
  initializeSwaggerUI();
  window.addEventListener("message", handleMessage);
});

onBeforeUnmount(() => {
  window.removeEventListener("message", handleMessage);
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