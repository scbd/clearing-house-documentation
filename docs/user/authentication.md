<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../swagger/json/user.authentication.json";
</script>

# User - Authentication

## Endpoint

**POST** `/api/v2013/authentication/token`

## Headers

| Field            | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Content-Type     | String | The media type of the request body. Allowed values: `application/json`             |
| Accept           | String | The media type of the response. Allowed values: `application/json`                 |

## Request Payload

| Field    | Type   | Description                 |
| -------- | ------ | --------------------------- |
| email    | String | Your CBD email address      |
| password | String | Your CBD account password   |

## Obtaining the Authorization Token

To authenticate and obtain the `Authorization` token for accessing the API endpoints, follow these steps:

1. **Endpoint:** Send a `POST` request to the following URL: `https://absch.cbddev.xyz/api/v2013/authentication/token`
2. **Payload:** Include your CBD email address and password in the request body as JSON:
```json
{
  "email": "<your cbd email>",
  "password": "<your cbd password>"
}
```
3. **Response:** Upon successful authentication, the server will respond with an authentication token (authenticationToken) and its expiration timestamp (expiration):
```json
{
  "authenticationToken": "<AUTHENTICATION TOKEN>",
  "expiration": "2024-07-17T02:01:54.2274392Z"
}

```
4. **Usage:**  Use the authenticationToken received in the response as the Bearer token in the Authorization header for subsequent API requests:
```javascript
Authorization: Bearer <AUTHENTICATION TOKEN>
```
Replace `<AUTHENTICATION TOKEN>` with the actual token received from the authentication endpoint.
This authentication process ensures secure access to the API endpoints using your CBD credentials.

## Playground

<SwaggerUI :swaggerJson="swaggerJson" />