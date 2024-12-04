<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/cdi/cbi-audience.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CBI Audience

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the AFB155C4-93A6-402C-B812-CFC7488ED651 domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/AFB155C4-93A6-402C-B812-CFC7488ED651/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />