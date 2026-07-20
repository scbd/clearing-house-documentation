<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import SchemaTable from "@/components/common/schema-table.vue"
import contact from "@/swagger/schemas/abs/contact"
import { createSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: createSpec({ apiUrl, realm, schema: contact }), protected: true },
];
</script>

# Contact - Create

## Overview

This documentation describes the API endpoint for creating a new Contact record in the ABS Clearing-House using the `POST` method. The endpoint allows clients to submit a new record to the system.

## Endpoint

**POST** `/api/v2013/documents`

This is the endpoint to which the POST request should be made to create a new record.

## Header
<!--@include: @/../components/common/header/authorization-realm.md-->

**Realm for this application and environment:** <code>{{ realm }}</code>

## Query Parameters
<!--@include: @/../components/common/query/schema.md-->

## Validation Errors
<!--@include: @/../components/common/validation-error.md-->

## Request Body

The table below outlines the structure of the request body, including the fields, their types, and whether they are mandatory. Example values are provided for clarity.

<SchemaTable :schema="contact" />

## Environment URLs
<!--@include: @/../components/common/environment-urls.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
