<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.organization-types.json";
</script>

# Organization Types

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Organization%20Types/terms`

<!--@include: ../../../components/common/header-content.md-->

## Playground

<SwaggerUI :swaggerJson="swaggerJson" />