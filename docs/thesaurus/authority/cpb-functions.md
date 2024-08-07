<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.cpb-functions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Authority - CBP Functions

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Subject Areas/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />