<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.general.regions.json";
</script>


# General - Regions

## Endpoint

**GET** `/api/v2013/thesaurus/domains/regions/terms`

<!--@include: ../../../components/common/header-content.md-->

## Playground

<SwaggerUI :swaggerJson="swaggerJson" />