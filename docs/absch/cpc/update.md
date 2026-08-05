<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import cpc from "@/swagger/schemas/abs/cpc"
import { updateSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: updateSpec({ apiUrl, realm, schema: cpc }), protected: true },
];
</script>

# Checkpoint Communique - Update

## Overview

Updates an existing Checkpoint Communique record in the ABS Clearing-House and re-runs the publishing workflow — identifier check, securities, validation, draft and workflow — in a single call.

## Endpoint

**PUT** `/api/v2023/documents/schemas/absCheckpointCommunique/:identifier`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `realm` query parameter`)

Calls to this endpoint require a bearer token — see [User - Authentication](/absch/user/authentication).

## URL Parameters

| Parameter | Description |
| --- | --- |
| `identifier` | Identifier of the record to update. The `:identifier` path parameter must match the `header.identifier` inside the document. |

## Request Body

The record's fields, wrapped in a `document` object. Two optional fields may accompany it: `additionalInfo` (free text, up to 1000 characters) and `batchId` (up to 100 characters, when multiple records are batched for publishing together).

<SchemaTable :schema="cpc" />

## Response

A successful call returns the saved draft and the publishing workflow that was started. Validation failures **also return HTTP 200**, with an `errors` array in the body instead — always check the response body, not just the status code.

Publishing through the legacy v2013 API uses the [Save Draft](/absch/general/save-draft) endpoint plus a workflow call; new integrations should use this single v2023 call instead. The record's other document operations (drafts, locks, securities, validation, versions) are documented under Document Operations.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
