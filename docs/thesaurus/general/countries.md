<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.general.countries.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# General - Countries

## Endpoint

**GET** `/api/v2013/thesaurus/domains/countries/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />