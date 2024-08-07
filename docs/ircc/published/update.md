<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.update.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# IRCC - Update

## Overview

This documentation describes the API endpoint for update an existing IRCC (Internationally Recognized Certificate of Compliance) using the PUT method. The endpoint allows clients to update documents to the system.

<!--@include: ../../../components/ircc/introduction.md-->

## Endpoint

**PUT** `/api/v2013/documents/:uid`

This is the endpoint to which the PUT request should be made to update an existing document.

<!--@include: ../../../components/ircc/header-request_body.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>