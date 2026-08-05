<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { authenticationTokenSpec } from "@/swagger/generators/authentication"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()

const swaggerSpecs = [
  { json: authenticationTokenSpec({ apiUrl }), protected: false },
];
</script>

# User - Authentication

## Overview

Authenticates a CBD account and returns the authorization token used by the protected endpoints of the Clearing-House Mechanism API. CBD accounts are shared across the clearing houses, so this call takes no realm.

## Endpoint

**POST** `/api/v2013/authentication/token`

## Request Body

| Field | Type | Description |
| --- | --- | --- |
| `email` | String | Your registered CBD account email address. |
| `password` | String | Your CBD account password. |

## Using the Token

A successful call returns the token and its expiration:

```json
{
  "authenticationToken": "<AUTHENTICATION TOKEN>",
  "expiration": "2024-07-17T02:01:54.2274392Z"
}
```

Send it as a bearer token in the `Authorization` header of subsequent requests:

```
Authorization: Bearer <AUTHENTICATION TOKEN>
```

Invalid credentials are rejected with `403 Forbidden` and an empty response body.

Tokens are environment-specific: this site targets <code>{{ apiUrl }}</code>, and a token issued there is not valid on the other environment.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
