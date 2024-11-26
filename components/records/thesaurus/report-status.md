<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/nbsap/report-status.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Report Status

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 7F0D898A-6BF1-4CE6-AA77-7FEAED3429C6 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/7F0D898A-6BF1-4CE6-AA77-7FEAED3429C6/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />