<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/national-report/assessment-progress.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Assessment Policy

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the EF99BEFD-5070-41C4-91F0-C051B338EEA6 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/EF99BEFD-5070-41C4-91F0-C051B338EEA6/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />