<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority-keywords.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Authority - Keywords

## Endpoint

**GET** `/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />