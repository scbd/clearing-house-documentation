<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/measure/abs-measures.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - ABS Measures

## Overview

This endpoint provides access to a list of measures related to Access and Benefit-Sharing (ABS) within the context of the Convention on Biological Diversity (CBD). This endpoint allows users to retrieve standardized terms and definitions used to describe ABS measures, which are crucial for documenting and reporting on the management and utilization of genetic resources.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/50616B56-12F3-4C46-BC43-2DFC26679177/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />