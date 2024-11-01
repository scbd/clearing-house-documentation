<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/authority/cpb-organism-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Authority - CPB Organism Types

## Overview

This endpoint provides a list of organism types categorized under the Convention on Biological Diversity's (CBD). This endpoint is essential for retrieving standardized terms related to different types of organisms as defined in the context of biosafety and biodiversity management.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/TypeOfOrganisms/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />