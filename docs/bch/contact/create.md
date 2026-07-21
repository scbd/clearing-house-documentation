<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import contact from "@/swagger/schemas/bch/contact"
import { createSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: createSpec({ apiUrl, realm, schema: contact }), protected: true },
];
</script>

# Contact - Create

> **Draft** — fields pending review (REBUILD.md review gate).

## Overview

Creates a new Contact record in the Biosafety Clearing-House and initiates the publishing workflow — identifier check, securities, validation, draft and workflow — in a single call.

## Endpoint

**POST** `/api/v2023/documents/schemas/contact`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `realm` query parameter)

## Request Body

The record's fields, wrapped in a `document` object. The table below outlines the fields, their types, and whether they are mandatory.

<SchemaTable :schema="contact" />

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
