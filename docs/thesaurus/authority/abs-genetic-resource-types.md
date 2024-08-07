<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.abs-genetic-resource-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Authority - ABS Genetic Resource Types

## Endpoint

**GET** `/api/v2013/thesaurus/domains/20945FA8-C24C-4AF6-B3D9-367592AFDF48/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />