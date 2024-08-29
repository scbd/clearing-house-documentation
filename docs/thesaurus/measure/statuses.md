<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/measure/statuses.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Statuses

## Overview

This endpoint provides access to a list of statuses relevant to measures and policies related to the Convention on Biological Diversity (CBD). This endpoint is used to retrieve the various statuses that can be associated with measures or actions in the context of biodiversity management and conservation. These statuses help in tracking and reporting the progress, implementation, and effectiveness of measures.


## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/ED7CDBD8-7762-4A84-82DD-30C01458A799/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />