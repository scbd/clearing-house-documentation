import axios from "axios";
import { APP_CONFIG } from "../docs/app-config";

export class AuthManager {
  constructor(accountsHostUrl) {
    this.token = null;
    this.userTokenResolved = null;
    this.maxAge = null;
    this.accountsHostUrl = accountsHostUrl;
    this.accountsIframe = null;
  }

  // Set the user token
  setUserToken(newToken) {
    this.token = newToken;
  }

  // Fetch user details based on the token
  async fetchUser() {
    try {
      const response = await axios.get(
        `${APP_CONFIG.API_URL}/api/v2013/authentication/user`,
        {
          headers: {
            Authorization: `Ticket ${this.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("An error occurred", error);
    }
  }

  // Logout the user
  async logout() {
    this.userTokenResolved = undefined;
    await this.setScbdIframeToken({ authenticationToken: null });
  }

  // Retrieve the token from the iframe
  async getScbdIframeToken() {
    this.userTokenResolved = undefined;
    const token = await this.resolveToken();
    return token;
  }

  // Set the token in the iframe
  async setScbdIframeToken({
    authenticationToken,
    authenticationEmail,
    expiration,
  }) {
    const msg = {
      type: "setAuthenticationToken",
      authenticationToken,
      authenticationEmail,
      expiration,
    };

    const iframe = this.getScbdIframe();
    if (!iframe) {
      const onloadCallback = (newIframe) => {
        this.postIFrameMessage(newIframe, JSON.stringify(msg));
      };
      this.createScbdIframe(onloadCallback);
    } else {
      this.postIFrameMessage(iframe, JSON.stringify(msg));
    }
  }

  // Listen for post messages
  receivePostMessage(event) {
    if (!event.data || this.accountsHostUrl !== event.origin) return;

    const { type, authenticationToken, authenticationEmail, expiration } =
      JSON.parse(event.data);

    if (!["authenticationTokenUpdated", "authenticationToken"].includes(type))
      return;

    if (type === "authenticationToken") {
      this.userTokenResolved = true;
      this.maxAge = Date.parse(expiration) / 1000;
      this.setUserToken(authenticationToken);
    } else if (type === "authenticationTokenUpdated") {
      this.getScbdIframeToken();
    }
  }

  // Get the iframe if it exists
  getScbdIframe() {
    const iFrames = [...window.document.getElementsByTagName("iframe")].find(
      (e) => e.name === "scbdAuthFrame"
    );

    if (iFrames) {
      const { origin } = new URL(iFrames.getAttribute("src"));

      if (this.accountsHostUrl === origin) return iFrames;
    }
    return null;
  }

  // Create the iframe if it doesn't exist
  createScbdIframe(onloadCallback) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `${this.accountsHostUrl}/app/authorize.html`);
    iframe.setAttribute("name", "scbdAuthFrame");
    iframe.setAttribute("style", "display:none;");
    iframe.onload = () => onloadCallback(iframe);
    document.head.appendChild(iframe);
    return iframe;
  }

  // Resolve the token by checking the iframe
  resolveToken(ms = 300) {
    return new Promise((resolve, reject) => {
      window.addEventListener("message", (event) =>
        this.receivePostMessage(event)
      );

      const type = "getAuthenticationToken";
      let iframe = this.getScbdIframe();

      if (!iframe) {
        const onloadCallback = (newIframe) => {
          this.postIFrameMessage(newIframe, JSON.stringify({ type }));
        };
        this.createScbdIframe(onloadCallback);
      } else {
        this.postIFrameMessage(iframe, JSON.stringify({ type }));
      }

      const interval = setInterval(() => {
        if (this.userTokenResolved) {
          clearInterval(interval);
          resolve(this.token);
          window.removeEventListener("message", this.receivePostMessage);
        }
      }, ms);
    });
  }

  // Send a message to the iframe
  postIFrameMessage(iframe, message) {
    const { contentWindow } = iframe;
    contentWindow.postMessage(message, this.accountsHostUrl);
  }

  isServer(){
    return false;
  }
}
