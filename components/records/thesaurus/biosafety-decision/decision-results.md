<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/biosafety-decision/decision-results.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Biosafety Decision - Decision Results

## Overview

This endpoint provides access to terms related to the approval of Living Modified Organisms (LMOs) for import and/or use without conditions. The key term included is "Approval of the import and/or use of the LMO(s) without conditions," which is defined in multiple languages to facilitate understanding among diverse stakeholders.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/DecisionResults/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />