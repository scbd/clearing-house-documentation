<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import cpc from "@/swagger/schemas/abs/cpc"
import { createSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: createSpec({ apiUrl, realm, schema: cpc }), protected: true },
];
</script>

# Checkpoint Communique - Create

> **Draft** — fields pending review (REBUILD.md review gate).

## Overview

Creates a new Checkpoint Communique record in the ABS Clearing-House and initiates the publishing workflow — identifier check, securities, validation, draft and workflow — in a single call.

## Endpoint

**POST** `/api/v2023/documents/schemas/absCheckpointCommunique`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `realm` query parameter`)

Calls to this endpoint require a bearer token — see [User - Authentication](/absch/user/authentication).

## Request Body

The record's fields, wrapped in a `document` object. Two optional fields may accompany it: `additionalInfo` (free text, up to 1000 characters) and `batchId` (up to 100 characters, when multiple records are batched for publishing together). The record's identifier is taken from `header.identifier`; publishing fails if a record or draft with that identifier already exists.

<SchemaTable :schema="cpc" />

## Response

A successful call returns the saved draft and the publishing workflow that was started. Validation failures **also return HTTP 200**, with an `errors` array in the body instead — always check the response body, not just the status code.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
