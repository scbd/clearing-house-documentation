<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../swagger/json/ircc/delete.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# IRCC - Delete

## Overview

This endpoint is used to delete a specific document from the system using its unique identifier (`uid`). This operation removes the document from the database and can be useful for managing and maintaining the document repository, ensuring that outdated or irrelevant documents are removed as needed.

## Endpoint
**DELETE** `/api/v2013/documents/:uid`

## Headers
<!--@include: ../../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: ../../components/common/query/schema.md-->

## URL Parameters
<!--@include: ../../components/common/url/uid.md-->

## Environment URLs
<!--@include: ../../components/common/environment-urls.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />