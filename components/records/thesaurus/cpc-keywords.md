<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/checkpoint-communique/cpc-keywords.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Checkpoint Communique - CPC Keywords

## Overview

This endpoint provides access to a list of terms associated with a specific domain within the thesaurus. This endpoint is designed to retrieve terms relevant to the CPC (Checkpoint Communique) Keywords domain. It helps users fetch and utilize keywords associated with communicative checkpoints in the context of the specified domain.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />