<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/cdi/cbi-status.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CBI Status

## Overview

The Thesaurus Terms API provides structured data for thesaurus terms in specific domains. This endpoint retrieves terms under the domain 4E7731C7-791E-46E9-A579-7272AF261FED. Each term includes multilingual titles, descriptions, and metadata, making it useful for applications involving content categorization, multilingual support, or structured knowledge management


## Endpoint

**GET** `/api/v2013/thesaurus/domains/4E7731C7-791E-46E9-A579-7272AF261FED/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />