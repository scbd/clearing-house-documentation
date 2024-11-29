<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/national-report/policy-instruments.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Policy Instruments

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 35772D10-DB54-4BF8-954E-F685A05F7FEA domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/35772D10-DB54-4BF8-954E-F685A05F7FEA/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />