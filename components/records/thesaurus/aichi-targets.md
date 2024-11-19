<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/resource/aichi-targets.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Aichi Targets

## Overview

This endpoint retrieves terms related to the Aichi Biodiversity Targets, which are a set of global biodiversity goals established under the Convention on Biological Diversity (CBD). These terms represent key targets, such as raising awareness of biodiversity values, aimed at guiding conservation efforts, sustainability practices, and policy-making. By accessing these terms, users can find detailed, standardized definitions to support awareness, reporting, and educational initiatives around biodiversity.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/AICHI-TARGETS/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />