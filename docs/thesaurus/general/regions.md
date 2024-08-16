<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/general/regions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# General - Regions

## Overview

This endpoint provides access to a standardized list of geographic regions as defined in the thesaurus. This endpoint is part of the system used to ensure consistent terminology for geographic regions across various applications and services. It is particularly useful for applications that need to reference or display geographic regions in a standardized manner, such as for geographical data analysis, reporting, or selection in forms.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/regions/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />