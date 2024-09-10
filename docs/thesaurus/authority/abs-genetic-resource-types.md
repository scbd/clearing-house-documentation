<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/authority/abs-genetic-resource-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Authority - ABS Genetic Resource Types

## Overview

This endpoint provides access to a comprehensive list of genetic resource types relevant to Access and Benefit-Sharing (ABS) agreements. This endpoint retrieves terms that classify different types of genetic resources involved in ABS arrangements, which are essential for the effective management and compliance with international agreements regarding the use of genetic resources and traditional knowledge.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/20945FA8-C24C-4AF6-B3D9-367592AFDF48/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />