<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.cbd-subjects.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CBD Subjects

## Endpoint

**GET** `/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms`

<!--@include: ../../../components/common/header-content.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />