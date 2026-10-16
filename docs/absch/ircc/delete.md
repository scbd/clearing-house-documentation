<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import ircc from "@/swagger/schemas/abs/ircc"
import { deleteSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: deleteSpec({ apiUrl, realm, schema: ircc }), protected: true },
];
</script>

# Internationally Recognized Certificate of Compliance - Delete

## Overview

Deletes a Internationally Recognized Certificate of Compliance record from the ABS Clearing-House by its unique identifier (`uid`). Use this to remove records that are outdated or no longer relevant.

## Endpoint

**DELETE** `/api/v2013/documents/:uid`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `Realm` HTTP header`)

Calls to this endpoint require a bearer token — see [User - Authentication](/absch/user/authentication).

## URL Parameters

| Parameter | Description |
| --- | --- |
| `uid` | Identifier of the record. The value is case-sensitive. |

## Query Parameters

| Parameter | Description |
| --- | --- |
| `schema` | The record type being deleted: `absPermit`. |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
