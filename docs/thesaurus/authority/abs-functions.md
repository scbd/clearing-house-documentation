<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.abs-functions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Authority - ABS Functions

## Endpoint

**GET** `/api/v2013/thesaurus/domains/8102E184-E282-47F7-A49F-4C219B0EE235/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />