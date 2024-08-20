<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../swagger/json/ircc/list.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];

</script>

# Draft Records

## Overview
This endpoint provides a way to retrieve draft records from the Contact system. Draft records are documents that are still being prepared or are not yet finalized. This endpoint supports various query parameters to filter, sort, and paginate the results, making it easier to manage and review draft documents.

## Endpoint
**GET** `/api/v2013/documents`

## Header
<!--@include: ../../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: ../../components/common/query/collection-filter-orderby-top-skip.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
