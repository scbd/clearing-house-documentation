<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/measure/languages.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Languages

## Overview

This endpoint provides access to a list of languages used for describing measurements and data within the context of the Convention on Biological Diversity (CBD). This endpoint helps users retrieve a standardized list of language codes and names that are relevant for measurement-related data and documentation. It is essential for ensuring that measurement data is consistently described and categorized across different systems and applications.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/52AFC0EE-7A02-4EFA-9277-8B6C327CE21F/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />