<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/resource/cpb-thematic-areas.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CPB Thematic Areas

## Overview

This endpoint retrieves a list of terms associated with biosafety policy and regulation under the Convention on Biological Diversity (CBD). These terms are essential for understanding global policies and regulatory frameworks related to biosafety in biotechnology, which ensure the safe use and management of biological technology applications. This data supports the documentation and analysis of biosafety measures worldwide, aiding in compliance, policy development, and risk prevention.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/043C7F0D-2226-4E54-A56F-EE0B74CCC984/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />