<template>
  <div v-if="isProtected && !authToken">
    <button class="btn btn-primary" @click="showLoginIframe">Login</button>
    <div v-if="showIframe" class="login-iframe-container">
      <iframe :src="loginUrl" class="login-iframe"></iframe>
    </div>
  </div>
  <div id="swagger-ui"></div>
</template>

<script>
import "swagger-ui/dist/swagger-ui.css";
import SwaggerUI from "swagger-ui";

export default {
  name: "SwaggerUI",
  props: {
    swaggerJson: {
      type: Object,
      required: true,
    },
    protected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      authToken: null,
      isProtected: this.protected,
      showIframe: false,
      loginUrl: `http://localhost:8080?redirect=${encodeURIComponent(
        window.location.href
      )}`,
    };
  },
  async mounted() {
    await import("bootstrap/dist/css/bootstrap.min.css");
    await import("bootstrap");

    this.checkForToken();
    this.initializeSwaggerUI();
    this.authToken = this.getCookie("authToken");

    window.addEventListener("message", this.handleMessage);
  },
  beforeDestroy() {
    window.removeEventListener("message", this.handleMessage);
  },
  methods: {
    goToLoginPage() {
      const redirectUrl = encodeURIComponent(window.location.href);
      window.location.href = `http://localhost:8080?redirect=${redirectUrl}`;
    },
    showLoginIframe() {
      this.showIframe = true;
    },
    handleMessage(event) {
      if (event.origin !== "http://localhost:8080") return;
      if (event.data.type === "loginSuccess" && event.data.token) {
        console.log("TOKEN", event.data.token);
        this.setCookie("authToken", event.data.token, 7);
        this.authToken = event.data.token;
        this.showIframe = false; // Close the iframe
        this.initializeSwaggerUI();
      }
    },
    async initializeSwaggerUI() {
      const ui = await SwaggerUI({
        spec: this.swaggerJson,
        dom_id: "#swagger-ui",
        operationsSorter: "alpha",
        presets: [SwaggerUI.presets.apis, SwaggerUI.SwaggerUIStandalonePreset],
        layout: "BaseLayout",
      });
      if (this.protected) {
        if (this.authToken) {
          ui.initOAuth({
            clientId: "your-client-id",
            clientSecret: "your-client-secret-if-required",
            realm: "your-realms",
            appName: "your-app-name",
            scopeSeparator: " ",
            additionalQueryStringParams: {},
          });
          const prefixedAuthToken = `Ticket ${this.authToken}`;
          ui.preauthorizeApiKey("ApiKeyAuth", prefixedAuthToken);
          const observer = new MutationObserver(() => {
            const tryOutButtons = document.querySelectorAll(".try-out__btn");
            tryOutButtons.forEach((button) => {
              button.disabled = false;
            });
          });

          const targetNode = document.getElementById("swagger-ui");
          const config = { childList: true, subtree: true };

          observer.observe(targetNode, config);
        } else {
          const observer = new MutationObserver(() => {
            const tryOutButtons = document.querySelectorAll(".try-out__btn");
            tryOutButtons.forEach((button) => {
              button.disabled = true;
              button.title = "Authorization token is missing";
            });
          });

          const targetNode = document.getElementById("swagger-ui");
          const config = { childList: true, subtree: true };

          observer.observe(targetNode, config);
        }

        const observer = new MutationObserver(() => {
          const authorizeBtn = document.querySelector(".auth-wrapper");
          if (authorizeBtn) {
            authorizeBtn.parentNode.removeChild(authorizeBtn);
          }
        });

        const targetNode = document.getElementById("swagger-ui");
        const config = { childList: true, subtree: true };

        observer.observe(targetNode, config);
      }

      const observer = new MutationObserver(() => {
        const infoContainer = document.querySelector(".information-container");
        infoContainer.style.display = "none";
      });
      const targetNode = document.getElementById("swagger-ui");
      const config = { childList: true, subtree: true };

      observer.observe(targetNode, config);
      // document.head.appendChild(script);
    },
    checkForToken() {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      if (token) {
        this.setCookie("authToken", token, 7); // Set cookie for 7 days
        window.location.href = window.location.href.split("?")[0]; // Redirect to the home page without query params
      }
    },
    setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
  },
  // created() {
  //  this.checkForToken();
  // },
};
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
