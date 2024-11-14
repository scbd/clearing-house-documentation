<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/resource/abs-subjects.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# ABS Subjects

## Overview

This endpoint retrieves terms related to the Aichi Biodiversity Targets, which are a set of global biodiversity goals established under the Convention on Biological Diversity (CBD). These terms represent key targets, such as raising awareness of biodiversity values, aimed at guiding conservation efforts, sustainability practices, and policy-making. By accessing these terms, users can find detailed, standardized definitions to support awareness, reporting, and educational initiatives around biodiversity.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />