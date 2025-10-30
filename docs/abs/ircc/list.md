<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import irccJson from "@/swagger/json/ircc/list.json";
import baseJson from "@/swagger/json/records/list.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/documents"].get.parameters[0].schema.example = specific.example;
  return merged;
}

const swaggerSpecs = [
  { json: mergeJson(baseJson, irccJson), protected: true },
];

</script>

# Draft Records

## Overview
This endpoint provides a way to retrieve draft records from the IRCC (Internationally Recognized Certificate of Compliance) system. Draft records are records that are still being prepared or are not yet finalized. This endpoint supports various query parameters to filter, sort, and paginate the results, making it easier to manage and review draft records.


## Endpoint
**GET** `/api/v2013/documents`

## Header
<!--@include: @/../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: @/../components/common/query/collection-filter-orderby-top-skip.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
