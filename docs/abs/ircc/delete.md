<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import irccJson from "@/swagger/json/ircc/delete.json";
import baseJson from "@/swagger/json/records/delete.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/documents/{uid}"].delete.parameters[1].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json: mergeJson(baseJson, irccJson), protected: true },
];
</script>

# IRCC - Delete

## Overview

This endpoint is used to delete a specific document from the system using its unique identifier (`uid`). This operation removes the document from the database and can be useful for managing and maintaining the document repository, ensuring that outdated or irrelevant documents are removed as needed.

## Endpoint
**DELETE** `/api/v2013/documents/:uid`

## Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

<br>

**Realm Values:**

<table>
    <thead>
        <tr>
            <th>Applications</th>
            <th>Development Realm</th>
            <th>Production Realm</th>
        </tr>
    </thead>
    <tbody>
        <!--@include: @/../components/common/realm/abs.md-->
    </tbody>
</table>

## Query Parameters
<!--@include: @/../components/common/query/schema.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Environment URLs
<!--@include: @/../components/common/environment-urls.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />