<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("bch-ra-subjects")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# BCH RA Subjects

## Overview

This endpoint provides a roadmap for risk assessment of living modified organisms (LMOs) relevant to the Convention on Biological Diversity (CBD). The terms retrieved by this endpoint outline key documents, guidelines, and frameworks used to evaluate and manage potential risks associated with LMOs. This information aids regulatory bodies, scientists, and policymakers in aligning their assessments with international standards for biosafety and biodiversity preservation.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/69B43BB5-693B-4ED9-8FE0-95895E144142/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
