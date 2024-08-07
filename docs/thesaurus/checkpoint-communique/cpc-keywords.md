<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.checkpoint-communique.cpc-keywords.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Checkpoint Communique - CPC Keywords

## Endpoint

**GET** `/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms`

<!--@include: ../../../components/common/header-content.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />