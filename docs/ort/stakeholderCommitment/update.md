<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import stakeholderCommitment from "@/swagger/schemas/ort/stakeholderCommitment"
import { updateSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: updateSpec({ apiUrl, realm, schema: stakeholderCommitment }), protected: true },
];
</script>

# Stakeholder Commitment - Update

## Overview

Updates an existing Stakeholder Commitment record in the Online Reporting Tool and re-runs the publishing workflow — identifier check, securities, validation, draft and workflow — in a single call.

## Endpoint

**PUT** `/api/v2023/documents/schemas/stakeholderCommitment/:identifier`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `realm` query parameter`)

Calls to this endpoint require a bearer token — see [User - Authentication](/ort/user/authentication).

## URL Parameters

| Parameter | Description |
| --- | --- |
| `identifier` | Identifier of the record to update. The `:identifier` path parameter must match the `header.identifier` inside the document. |

## Request Body

The record's fields, wrapped in a `document` object. Two optional fields may accompany it: `additionalInfo` (free text, up to 1000 characters) and `batchId` (up to 100 characters, when multiple records are batched for publishing together).

<SchemaTable :schema="stakeholderCommitment" />

## Response

A successful call returns the saved draft and the publishing workflow that was started. Validation failures **also return HTTP 200**, with an `errors` array in the body instead — always check the response body, not just the status code.

Existing v2013 integrations can follow the multi-call [legacy v2013 publishing flow](/ort/general/drafts) instead.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
