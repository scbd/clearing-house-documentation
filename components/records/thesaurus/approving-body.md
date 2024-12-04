<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/nbsap/approving-body.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Approving Body

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the F1A5BFF1-F555-40D1-A24C-BBE1BE8E82BF domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/F1A5BFF1-F555-40D1-A24C-BBE1BE8E82BF/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />