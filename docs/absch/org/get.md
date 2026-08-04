<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import org from "@/swagger/schemas/abs/org"
import { getSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: getSpec({ apiUrl, realm, schema: org }), protected: false },
];
</script>

# Organization - Get

> **Draft** — pending review (REBUILD.md review gate).

## Overview

Retrieves a single Organization record from the ABS Clearing-House by its unique identifier (`uid`). The `Accept` header controls the result format: `*` returns the record raw as submitted, `application/json` casts it to JSON.

## Endpoint

**GET** `/api/v2013/documents/:uid`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `Realm` HTTP header)

## URL Parameters

| Parameter | Description |
| --- | --- |
| `uid` | Identifier of the record. The value is case-sensitive. |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
