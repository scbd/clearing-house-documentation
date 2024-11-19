<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/biosafety-decision/transboundary-movement-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Biosafety Decision - Transboundary Movement Types

## Overview

This endpoint is designed to retrieve terms associated with transboundary movements of Living Modified Organisms (LMOs).Understanding this term is crucial for stakeholders involved in the international movement of LMOs, including regulatory bodies, environmental organizations, and companies engaged in biotechnology. The endpoint ensures that users can access standardized definitions and legal references, which can aid in compliance and risk management related to the transboundary movement of LMOs.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/TransboundaryMovementTypes/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />