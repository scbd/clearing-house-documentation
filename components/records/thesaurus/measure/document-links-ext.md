<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/measure/document-links-ext.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Document Links Ext

## Overview

This endpoint provides access to a list of terms related to ISO 639-2, which is a standard for language codes. This endpoint is used to retrieve information about language codes that can be used in the context of documents and measures within the Convention on Biological Diversity (CBD). It helps in associating documents with specific languages, ensuring proper localization and accessibility.


## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/ISO639-2/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />