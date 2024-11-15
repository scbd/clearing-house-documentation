<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/cdi/cbi-funding-src.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CBI Funding Src

## Overview

This API provides access to terms related to Capacity Building Project Funding Types. These terms include metadata, multilingual titles, and relationships for categorizing funding mechanisms such as Bilateral. It serves as a foundational resource for organizations and systems managing funding classifications and capacity-building projects.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/Capacity Building Project Funding Types/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />