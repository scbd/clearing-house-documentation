<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import cpcJson from "@/swagger/json/cpc/delete.json";
import baseJson from "@/swagger/json/records/delete.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/documents/{uid}"].delete.parameters[1].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json: mergeJson(baseJson, cpcJson), protected: true },
];
</script>

# CPC - Delete

## Overview

This endpoint is used to delete a specific record from the system using its unique identifier (`uid`). This operation removes the record from the database and can be useful for managing and maintaining the record repository, ensuring that outdated or irrelevant records are removed as needed.

## Endpoint
**DELETE** `/api/v2013/documents/:uid`

## Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: @/../components/common/query/schema.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Environment URLs
<!--@include: @/../components/common/environment-urls.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />