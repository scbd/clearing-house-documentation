<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/measure/translation-type.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Translation Type

## Overview

This endpoint provides access to a list of terms related to different types of translations. This endpoint is used to retrieve information about various translation types that can be associated with documents and measures within the Convention on Biological Diversity (CBD). It helps in classifying and categorizing translations based on their type, ensuring proper documentation and management of translated materials.

## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/19E3C535-2919-4804-966C-E62728507291/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />