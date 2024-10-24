<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/authority/abs-jurisdictions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Authority - ABS Jurisdictions

## Overview

This endpoint provides access to a list of jurisdictions relevant to Access and Benefit-Sharing (ABS) agreements. This endpoint retrieves terms that describe different jurisdictions involved in ABS arrangements, which are crucial for ensuring compliance with international agreements and regulations related to the use of genetic resources and traditional knowledge. ABS jurisdictions help in identifying and managing the geographic and legal contexts in which ABS agreements are applied.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/51A113E9-071F-440A-83DC-E3499B7C646D/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />