<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/modified-organism/organism-common-uses.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Modified Organism - Organism Common Uses

## Overview

This endpoint provides access to a list of common uses of organisms, as defined in the thesaurus. It enables retrieval of terms related to various applications of organisms, such as biocontrol. These terms can be used in fields like environmental research, agricultural planning, and data categorization. The endpoint returns a structured list including identifiers, names, and multilingual titles for consistent reference and integration into various applications.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/OrganismCommonUses/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />