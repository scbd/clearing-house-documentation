<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.measure.document-links-ext.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Measure - Document Links Ext

## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/ISO639-2/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />