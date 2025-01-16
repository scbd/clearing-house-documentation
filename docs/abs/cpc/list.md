<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import cpcJson from "@/swagger/json/cpc/list.json";
import baseJson from "@/swagger/json/records/list.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/documents"].get.parameters[0].schema.example = specific.example;
  return merged;
}

const swaggerSpecs = [
  { json: mergeJson(baseJson, cpcJson), protected: true },
];

</script>

# Draft Records

## Overview
This endpoint provides a way to retrieve draft records from the CPC (Checkpoint Communiqué) system. Draft records are documents that are still being prepared or are not yet finalized. This endpoint supports various query parameters to filter, sort, and paginate the results, making it easier to manage and review draft documents.


## Endpoint
**GET** `/api/v2013/documents`

## Header
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
<!--@include: @/../components/common/query/collection-filter-orderby-top-skip.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
