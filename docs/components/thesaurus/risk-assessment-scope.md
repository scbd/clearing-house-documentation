<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("risk-assessment-scope")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Independent Risk Assessment - Risk Assessment Scope

## Overview

This endpoint provides access to terms related to the Risk Assessment Scope for Living Modified Organisms (LMOs). Specifically, it includes terms that outline the categories of LMOs, such as those intended for introduction into the environment. These terms support regulatory and scientific assessments by providing standardized definitions and classifications, which help clarify the scope of potential environmental impacts associated with the release of LMOs.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/RiskAssessmentScope/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
