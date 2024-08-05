<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.measure.jurisdictions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Jurisdictions

## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/7A56954F-7430-4B8B-B733-54B8A5E7FF40/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />