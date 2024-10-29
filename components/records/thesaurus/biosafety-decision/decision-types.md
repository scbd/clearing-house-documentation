<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/biosafety-decision/decision-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Biosafety Decision - Decision Types

## Overview

This endpoint retrieves decision-related terms specific to the intentional introduction of LMOs (Living Modified Organisms) into the environment, in accordance with Article 10 or other regulatory frameworks. The endpoint provides multilingual descriptions, broadening access for international users and stakeholders. Terms include titles, descriptions for experimental and commercial introductions, and context for regulatory compliance. Detailed information on broader and narrower decision types supports categorization within different regulatory and environmental frameworks.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/DecisionTypes/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />