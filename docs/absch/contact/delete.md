<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import contact from "@/swagger/schemas/abs/contact"
import { deleteSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: deleteSpec({ apiUrl, realm, schema: contact }), protected: true },
];
</script>

# Contact - Delete

> **Draft** — pending review (REBUILD.md review gate).

## Overview

Deletes a Contact record from the ABS Clearing-House by its unique identifier (`uid`). Use this to remove records that are outdated or no longer relevant.

## Endpoint

**DELETE** `/api/v2013/documents/:uid`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `Realm` HTTP header)

## URL Parameters

| Parameter | Description |
| --- | --- |
| `uid` | Identifier of the record. The value is case-sensitive. |

## Query Parameters

| Parameter | Description |
| --- | --- |
| `schema` | The record type being deleted: `contact`. |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
