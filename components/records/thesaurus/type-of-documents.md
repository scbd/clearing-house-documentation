<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/measure/type-of-documents.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Type of Documents

## Overview

This endpoint provides access to a list of standardized types of documents used within the context of the Convention on Biological Diversity (CBD). This endpoint is designed to help users retrieve a comprehensive list of document types that are relevant for documenting and reporting various activities and measures related to biodiversity and genetic resources.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/144CF550-7629-43F3-817E-CACDED34837E/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Usages

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Type of document/measure   | type | <a href="/msr/schema">MSR</a>  |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />