<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.cpb-functions.json";
</script>

# Authority - CBP Functions

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Subject Areas/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerJson="swaggerJson" />