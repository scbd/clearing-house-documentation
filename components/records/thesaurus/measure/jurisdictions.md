<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/measure/jurisdictions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Jurisdictions

## Overview

This endpoint provides access to a list of jurisdictions relevant to the Convention on Biological Diversity (CBD). This endpoint is intended to help users retrieve a comprehensive list of geographic and administrative jurisdictions that are associated with measures and policies related to biodiversity and genetic resources. The endpoint supports the standardization of jurisdictional data for better reporting, compliance, and data management.


## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/7A56954F-7430-4B8B-B733-54B8A5E7FF40/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Usages

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Area of jurisdiction   | jurisdiction | <a href="/msr/schema">MSR</a>  |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />