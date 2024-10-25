<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/modified-organism/technique-used.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Modified Organism - Technique Used

## Overview
This endpoint allows access to a list of terms related to techniques used for modified organisms, as defined in the thesaurus. It is part of the API for querying and retrieving technical terms, which can be applied in fields such as scientific research, data categorization, or dropdown selections. The endpoint returns a structured list of technique names, identifiers, and multilingual titles, useful for accurate terminology referencing and application.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/ABE9DCE3-92BA-4D5D-8948-7F7E541EEC6B/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />