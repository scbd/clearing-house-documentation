<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.measure.languages.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Languages

## Endpoint

**GET** `/api/v2013/thesaurus/domains/52AFC0EE-7A02-4EFA-9277-8B6C327CE21F/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />