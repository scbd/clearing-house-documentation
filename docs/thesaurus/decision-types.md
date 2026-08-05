<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("decision-types")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Biosafety Decision - Decision Types

## Overview

This endpoint retrieves decision-related terms specific to the intentional introduction of LMOs (Living Modified Organisms) into the environment. The endpoint provides multilingual descriptions, broadening access for international users and stakeholders. Terms include titles, descriptions for experimental and commercial introductions, and context for regulatory compliance. Detailed information on broader and narrower decision types supports categorization within different regulatory and environmental frameworks.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/DecisionTypes/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
