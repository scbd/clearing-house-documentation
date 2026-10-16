<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("abs-measures")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Measure - ABS Measures

## Overview

This endpoint provides access to a list of measures related to Access and Benefit-Sharing (ABS) within the context of the Convention on Biological Diversity (CBD). This endpoint allows users to retrieve standardized terms and definitions used to describe ABS measures, which are crucial for documenting and reporting on the management and utilization of genetic resources.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/50616B56-12F3-4C46-BC43-2DFC26679177/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
