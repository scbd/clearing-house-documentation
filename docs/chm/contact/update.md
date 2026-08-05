<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import contact from "@/swagger/schemas/chm/contact"
import { updateSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"
import LegacyPublishNote from "@/components/common/legacy-publish-note.vue"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: updateSpec({ apiUrl, realm, schema: contact }), protected: true },
];
</script>

# Contact - Update

## Overview

Updates an existing Contact record in the Clearing-House Mechanism and re-runs the publishing workflow — identifier check, securities, validation, draft and workflow — in a single call.

## Endpoint

**PUT** `/api/v2023/documents/schemas/contact/:identifier`

## Headers

<!--@include: @/components/common/workflow-headers.md-->

## Path Parameters

| Parameter | Description |
| --- | --- |
| `schema` | The record type being updated: `contact`. |
| `identifier` | The record's unique identifier. Must match the document's `header.identifier`. |

## Query Parameters

| Parameter | Required | Description |
| --- | --- | --- |
| `realm` | Yes | The Clearing-House context. For this application and environment: <code>{{ realm }}</code>. May alternatively be sent as the `Realm` HTTP header. |

## Request Body

<!--@include: @/components/common/workflow-request-body.md-->

The fields of the `document` object are below.

<SchemaTable :schema="contact" />

## Response

A successful call returns the saved draft and the publishing workflow that was started. Validation failures **also return HTTP 200**, with an `errors` array in the body instead — always check the response body, not just the status code.

<!--@include: @/components/common/workflow-validation-errors.md-->


## Errors

<!--@include: @/components/common/workflow-request-errors.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />

<LegacyPublishNote />
