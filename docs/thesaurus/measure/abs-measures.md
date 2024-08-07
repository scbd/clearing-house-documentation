<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.measure.abs-measures.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - ABS Measures

## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/50616B56-12F3-4C46-BC43-2DFC26679177/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />