<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/ircc/get.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: false },
];

</script>

# NMCC - Get

## Overview

This documentation describes the API endpoint for retrieving a specific NMCC document using the `GET` method. This endpoint allows clients to fetch detailed information about a document from the system using its unique identifier (`uid`). It is used to retrieve and view the details of an existing document.

## Endpoint
**GET** `/api/v2013/documents/:uid`

## Headers
<!--@include: @/../components/common/header/realm-accept.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />