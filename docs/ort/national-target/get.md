<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import nationalTarget from "@/swagger/schemas/ort/national-target"
import { getSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: getSpec({ apiUrl, realm, schema: nationalTarget }), protected: false },
];
</script>

# National Target - Get

> **Draft** — pending review (REBUILD.md review gate).

## Overview

Retrieves a single National Target record from the Online Reporting Tool by its unique identifier (`uid`). The `Accept` header controls the result format: `*` returns the record raw as submitted, `application/json` casts it to JSON.

## Endpoint

**GET** `/api/v2013/documents/:uid`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `Realm` HTTP header`)

## URL Parameters

| Parameter | Description |
| --- | --- |
| `uid` | Identifier of the record. The value is case-sensitive. |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
