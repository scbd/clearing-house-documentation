<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.get.json";
</script>

# IRCC - Get

## Endpoint

This endpoint allows you to retrieve a specific document identified by its unique identifier (`uid`). The request uses the HTTP `GET` method to fetch the document details from the system.

**GET** `/api/v2013/documents/:uid`

<!--@include: ../../../components/common/header-content-realm.md-->

<!--@include: ../../../components/common/url-uid-parameter-section.md-->

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />
