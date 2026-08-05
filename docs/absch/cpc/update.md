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

## Headers

<!--@include: @/components/common/workflow-headers.md-->

## Path Parameters

| Parameter | Description |
| --- | --- |
| `schema` | The record type being updated: `absCheckpointCommunique`. |
| `identifier` | The record's unique identifier. Must match the document's `header.identifier`. |

## Query Parameters

| Parameter | Required | Description |
| --- | --- | --- |
| `realm` | Yes | The Clearing-House context. For this application and environment: <code>{{ realm }}</code>. May alternatively be sent as the `Realm` HTTP header. |

## Request Body

<!--@include: @/components/common/workflow-request-body.md-->

The fields of the `document` object are below.

<SchemaTable :schema="cpc" />

## Response

A successful call returns the saved draft and the publishing workflow that was started. Validation failures **also return HTTP 200**, with an `errors` array in the body instead — always check the response body, not just the status code.

<!--@include: @/components/common/workflow-validation-errors.md-->

Publishing through the legacy v2013 API uses the [Save Draft](/absch/general/save-draft) endpoint plus a workflow call; new integrations should use this single v2023 call instead. The record's other document operations (drafts, locks, securities, validation, versions) are documented under Document Operations.

## Errors

<!--@include: @/components/common/workflow-request-errors.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
