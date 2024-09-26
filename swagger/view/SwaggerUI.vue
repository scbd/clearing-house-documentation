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
      <div :id="spec.domId ? `${spec.domId}-${index}` : `swagger-ui-${index}`"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const authToken = ref(null);
// const showIframe = ref(false);
const loginUrl = ref("");
let userTokenResolved = null;
let accountsHostUrl = "https://accounts.cbddev.xyz";
let token = null;
let maxAge = null;

const showLoginIframe = () => {
  // showIframe.value = true;
  // createScbdIframe();
  // createScbdIframe();
  const currentUrl = window.location.href;
  const loginUrl = `https://accounts.cbddev.xyz/signin?returnUrl=${encodeURIComponent(currentUrl)}`;
  window.location.href = loginUrl;
};

// const handleMessage = (event) => {
//   if (event.origin === "http://localhost:8080") {
//     if (event.data.type === "close") {
//       showIframe.value = false;
//     }
//     if (event.data.type === "loginSuccess" && event.data.token) {
//       setCookie("authToken", event.data.token, 7);
//       authToken.value = event.data.token;
//       showIframe.value = false;
//       initializeSwaggerUI();
//     }
//   }
// };

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
  loginUrl.value = `https://accounts.cbddev.xyz/app/authorize.html`;
  await import("bootstrap/dist/css/bootstrap.min.css");
  await import("bootstrap");

  checkForToken();
  initializeSwaggerUI();
  /////
  token = await getScbdIframeToken();
  if(token){
    const user = await fetchUser(token);
    console.log("USER", user);
    setCookie("authToken", token, 7);
  }
});

// onBeforeUnmount(() => {
//   window.removeEventListener("message", handleMessage);
// });
// ////////////////////////////////////////////////////////
// ******************************************************//
// ******************************************************//
// ******************************************************//
// ******************************************************//
// ******************************************************//

  const setUserToken = (newToken) =>  {
    //TODO : set token expiry
    // token.set(token);
    token = newToken;
  }

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://absch.cbddev.xyz/api/v2013/authentication/user",{
        headers:{
          "Authorization":`Ticket ${token}`
        }
      });
      
      return response.data;
    } catch (error) {
      console.error("An error occurred", error);
    }
  }

  const logout = async () => {
    userTokenResolved = undefined;
    
    await setScbdIframeToken({authenticationToken:null});
  }

  const getScbdIframeToken = async () => {
    userTokenResolved = undefined;
    const token = await resolveToken();

    return token;
  }

  const setScbdIframeToken = async ({authenticationToken, authenticationEmail, expiration}) => {
    var msg = {
      type: "setAuthenticationToken",
      authenticationToken,
      authenticationEmail,
      expiration
    };

    let accountsIframe = getScbdIframe();
    if(!accountsIframe){
      const onloadCallback = (newIframe)=> {
        postIFrameMessage.bind(this, newIframe, JSON.stringify(msg))
      }
      createScbdIframe(onloadCallback)
    }
    else{
      postIFrameMessage(accountsIframe, JSON.stringify(msg));
    }
  }


  const receivePostMessage = (event) => {
    if(!event.data || accountsHostUrl !== event.origin)
      return

    const {
      type,
      authenticationToken,
      authenticationEmail,
      expiration
    } = JSON.parse(event.data);

    if (!['authenticationTokenUpdated', 'authenticationToken'].includes(type)) 
      return;//throw new Error('unsupported authentication message type');
    if(type === 'authenticationToken'){
      userTokenResolved = true;
      maxAge = Date.parse(expiration) /1000
      setUserToken(authenticationToken);
    }
    else if(type === 'authenticationTokenUpdated'){
      getScbdIframeToken();
    }
  }

  const getScbdIframe = () => {
    const iFrames = [...window.document.getElementsByTagName('iframe')].find(e=>e.name == 'scbdAuthFrame');
    
    if(iFrames){
      const { origin } = new URL(iFrames.getAttribute('src'));

      if (accountsHostUrl === origin)
        return iFrames;
    }
  }

  const createScbdIframe = (onloadCallback) => {
    //Iframe was not found, embed one
    var sc = document.createElement("iframe");
    sc.setAttribute("src", `${accountsHostUrl}/app/authorize.html`);
    sc.setAttribute("name", "scbdAuthFrame");
    sc.setAttribute("style", "display:none;");
    sc.onload = () => onloadCallback(sc);
    document.head.appendChild(sc);
    return sc;
  }

  function resolveToken(ms = 300){
    return new Promise(async function (resolve, reject) {

      window.addEventListener('message', receivePostMessage);

      const type = 'getAuthenticationToken';
      let accountsIframe = getScbdIframe();

      if(!accountsIframe){

        const onloadCallback = (newIframe)=> {
          postIFrameMessage(newIframe, JSON.stringify({type}))
        }

        createScbdIframe(onloadCallback)
      }
      else{
        postIFrameMessage(accountsIframe, msg);
      }

      const interval = setInterval(function () {
        if (userTokenResolved) {
          clearInterval(interval);
          resolve(token);
          window.removeEventListener('message', receivePostMessage);
        }
      }, ms);
    });
  }

  const postIFrameMessage = (accountsIframe, message) => {
    const { contentWindow } = accountsIframe;    
    contentWindow.postMessage(message, accountsHostUrl);
  }

  const isServer = () =>{
    return false;
  }
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