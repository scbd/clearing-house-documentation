<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/independent-risk-assessment/risk-assessment-scope.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Independent Risk Assessment - Risk Assessment Scope

## Overview

This endpoint provides access to terms related to the Risk Assessment Scope for Living Modified Organisms (LMOs). Specifically, it includes terms that outline the categories of LMOs, such as those intended for introduction into the environment. These terms support regulatory and scientific assessments by providing standardized definitions and classifications, which help clarify the scope of potential environmental impacts associated with the release of LMOs.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/RiskAssessmentScope/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />