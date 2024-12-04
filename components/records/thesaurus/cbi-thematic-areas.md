<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/cdi/cbi-thematic-areas.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CBI Thematic Areas

## Overview

This API provides access to terms related to Biosafety Policy and Regulation. It includes multilingual titles, identifiers, and hierarchical relationships such as broader and narrower terms. The API is essential for systems managing biosafety knowledge, policies, and regulatory frameworks.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/043C7F0D-2226-4E54-A56F-EE0B74CCC984/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />