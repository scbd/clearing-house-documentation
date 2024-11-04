<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/biosafety-decision/decision-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Biosafety Decision - Decision LMO FFP Subject

## Overview

This endpoint retrieves terms specifically related to LMOs (Living Modified Organisms) that are intended for direct use as food. It provides multilingual titles to facilitate understanding across different language speakers. The data aims to support stakeholders involved in food safety, regulatory compliance, and biodiversity management by providing clear and accessible terminology related to the use of genetically modified organisms in food production.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/DecisionLMOFFPSubject/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />