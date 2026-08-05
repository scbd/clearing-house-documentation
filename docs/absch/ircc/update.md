<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import ircc from "@/swagger/schemas/abs/ircc"
import { updateSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: updateSpec({ apiUrl, realm, schema: ircc }), protected: true },
];
</script>

# Internationally Recognized Certificate of Compliance - Update

## Overview

Updates an existing Internationally Recognized Certificate of Compliance record in the ABS Clearing-House and re-runs the publishing workflow — identifier check, securities, validation, draft and workflow — in a single call.

## Endpoint

**PUT** `/api/v2023/documents/schemas/absPermit/:identifier`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `realm` query parameter`)

Calls to this endpoint require a bearer token — see [User - Authentication](/absch/user/authentication).

## URL Parameters

| Parameter | Description |
| --- | --- |
| `identifier` | Identifier of the record to update. The `:identifier` path parameter must match the `header.identifier` inside the document. |

## Request Body

<!--@include: @/components/common/workflow-request-body.md-->

The fields of the `document` object are below.

<SchemaTable :schema="ircc" />

## Response

A successful call returns the saved draft and the publishing workflow that was started. Validation failures **also return HTTP 200**, with an `errors` array in the body instead — always check the response body, not just the status code.

<!--@include: @/components/common/workflow-validation-errors.md-->

Publishing through the legacy v2013 API uses the [Save Draft](/absch/general/save-draft) endpoint plus a workflow call; new integrations should use this single v2023 call instead. The record's other document operations (drafts, locks, securities, validation, versions) are documented under Document Operations.

## Errors

<!--@include: @/components/common/workflow-request-errors.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
