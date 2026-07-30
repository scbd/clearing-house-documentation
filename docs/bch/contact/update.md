<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import contact from "@/swagger/schemas/bch/contact"
import { updateSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: updateSpec({ apiUrl, realm, schema: contact }), protected: true },
];
</script>

# Contact - Update

## Overview

Updates an existing Contact record in the Biosafety Clearing-House and re-runs the publishing workflow — identifier check, securities, validation, draft and workflow — in a single call.

## Endpoint

**PUT** `/api/v2023/documents/schemas/contact/:identifier`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `realm` query parameter)

## URL Parameters

| Parameter | Description |
| --- | --- |
| `identifier` | Identifier of the record to update. |

## Request Body

The record's fields, wrapped in a `document` object. The table below outlines the fields, their types, and whether they are mandatory.

<SchemaTable :schema="contact" />

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
