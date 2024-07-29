<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.create.json";
</script>

# IRCC - Create

## Overview

This documentation describes the API endpoint for creating an IRCC (Internationally Recognized Certificate of Compliance) using the POST method. The endpoint allows clients to submit documents to the system.

<!--@include: ../../../components/ircc/introduction.md-->

## Endpoint

**POST** `/api/v2013/documents`

This is the endpoint to which the POST request should be made to create a new document.

<!--@include: ../../../components/ircc/header-request_body.md-->

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />
