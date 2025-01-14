<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/ircc/get.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: false },
];

</script>

# National Report Binary Indicator Data - Get

## Overview

This documentation describes the API endpoint for retrieving a specific National Report Binary Indicator Data record using the `GET` method. This endpoint allows clients to fetch detailed information about a record from the system using its unique identifier (`uid`). It is used to retrieve and view the details of an existing record.

## Endpoint
**GET** `/api/v2013/documents/:uid`

## Headers
<!--@include: @/../components/common/header/realm-accept.md-->

**Realm Values for Development:**

<!--@include: @/../components/common/realm/ort-dev.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />