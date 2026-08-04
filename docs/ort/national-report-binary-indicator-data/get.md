<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import nationalReportBinaryIndicatorData from "@/swagger/schemas/ort/national-report-binary-indicator-data"
import { getSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: getSpec({ apiUrl, realm, schema: nationalReportBinaryIndicatorData }), protected: false },
];
</script>

# National Report Binary Indicator Data - Get

> **Draft** — pending review (REBUILD.md review gate).

## Overview

Retrieves a single National Report Binary Indicator Data record from the Online Reporting Tool by its unique identifier (`uid`). The `Accept` header controls the result format: `*` returns the record raw as submitted, `application/json` casts it to JSON.

## Endpoint

**GET** `/api/v2013/documents/:uid`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `Realm` HTTP header`)

## URL Parameters

| Parameter | Description |
| --- | --- |
| `uid` | Identifier of the record. The value is case-sensitive. |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
