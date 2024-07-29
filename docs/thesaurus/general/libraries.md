<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.general.libraries.json";
</script>

# General - Libraries

## Endpoint

**GET** `/api/v2013/thesaurus/domains/cbdClearingHouses/terms`

<!--@include: ../../../components/common/header-content.md-->



## Playground

<SwaggerUI :swaggerJson="swaggerJson" />