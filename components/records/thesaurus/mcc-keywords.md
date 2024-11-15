<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/nmcc/mcc-keywords.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# MCC Keywords

## Overview

This API endpoint provides terms and metadata related to "Access to Genetic Resources". The endpoint delivers detailed information about specific terms, their identifiers, multilingual titles, and their relationships to other terms. This is critical for managing compliance, legal frameworks, and the equitable sharing of benefits derived from genetic resources. It also supports multilingual data, aiding global collaboration and accessibility.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/ABS-A1920-Keywords/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />