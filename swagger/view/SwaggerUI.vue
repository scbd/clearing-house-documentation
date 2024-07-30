<template>
  <div v-if="isProtected && !authToken">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="alert alert-primary" role="alert">
            <div>
              <p>
                This is a protected route. To access this content, you need to
                be logged in. Logging in will provide you with an authentication
                token, which is required for making API calls.
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
  <div v-if="isProtected && authToken">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="alert alert-success" role="alert">
            <div>
              <p>
                You have successfully logged in, and an authentication token is
                available in your cookie. This route is protected, and access to
                this content requires a valid token.
              </p>
              <p>
                The token is automatically used to authenticate API requests
                made through Swagger. You can interact with the API and make
                authorized calls using the token stored in your browser's
                cookie.
              </p>
              <p>
                If you encounter any issues, ensure that your token is still
                valid and has not expired. If necessary, you can re-authenticate
                by clicking the login button to obtain a new token.
              </p>
              <button
                class="btn btn-success btn-block ml-3"
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
  <div id="swagger-ui"></div>
</template>

<script>
import "swagger-ui/dist/swagger-ui.css";

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
      loginUrl: "",
    };
  },
  async mounted() {
    if (typeof window !== "undefined") {
      this.loginUrl = `http://localhost:8080?redirect=${encodeURIComponent(
        window.location.href
      )}`;

      await import("bootstrap/dist/css/bootstrap.min.css");
      await import("bootstrap");

      this.checkForToken();
      this.authToken = this.getCookie("authToken");
      this.initializeSwaggerUI();

      window.addEventListener("message", this.handleMessage);
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("message", this.handleMessage);
    }
  },
  methods: {
    goToLoginPage() {
      if (typeof window !== "undefined") {
        const redirectUrl = encodeURIComponent(window.location.href);
        window.location.href = `http://localhost:8080?redirect=${redirectUrl}`;
      }
    },
    showLoginIframe() {
      this.showIframe = true;
    },
    handleMessage(event) {
      if (
        typeof window !== "undefined" &&
        event.origin === "http://localhost:8080"
      ) {
        if (event.data.type === "close") {
          this.showIframe = false;
        }
        if (event.data.type === "loginSuccess" && event.data.token) {
          this.setCookie("authToken", event.data.token, 7);
          this.authToken = event.data.token;
          this.showIframe = false;
          this.initializeSwaggerUI();
        }
      }
    },
    async initializeSwaggerUI() {
      if (typeof window !== "undefined") {
        const SwaggerUI = (await import("swagger-ui")).default;

        const ui = SwaggerUI({
          spec: this.swaggerJson,
          dom_id: "#swagger-ui",
          operationsSorter: "alpha",
          presets: [
            SwaggerUI.presets.apis,
            SwaggerUI.SwaggerUIStandalonePreset,
          ],
          layout: "BaseLayout",
          requestInterceptor: (request) => {
            request.headers["Realm"] = "ABS-DEV";
            return request;
          },
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
          const infoContainer = document.querySelector(
            ".information-container"
          );
          if (infoContainer) {
            infoContainer.style.display = "none";
          }
        });

        const targetNode = document.getElementById("swagger-ui");
        const config = { childList: true, subtree: true };

        observer.observe(targetNode, config);
      }
    },
    checkForToken() {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        if (token) {
          this.setCookie("authToken", token, 7); // Set cookie for 7 days
          window.location.href = window.location.href.split("?")[0]; // Redirect to the home page
        } else {
          // Check if the cookie exists and is expired
          const authToken = this.getCookie("authToken");
          if (authToken) {
            // Here you should implement logic to check token validity
            // For demonstration, we just clear it if present
            this.removeCookie("authToken");
          }
        }
      }
    },
    removeCookie(name) {
      document.cookie = name + "=; Max-Age=-99999999;";
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
