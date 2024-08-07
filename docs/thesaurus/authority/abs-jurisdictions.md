<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.abs-jurisdictions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Authority - ABS Jurisdictions

## Endpoint

**GET** `/api/v2013/thesaurus/domains/51A113E9-071F-440A-83DC-E3499B7C646D/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />