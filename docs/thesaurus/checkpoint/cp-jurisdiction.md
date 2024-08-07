<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.checkpoint.cp-jurisdiction.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Checkpoint - CP Jurisdiction

## Endpoint

**GET** `/api/v2013/thesaurus/domains/D7BD5BDE-A6B9-4261-B788-16839CCC4F7E/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />