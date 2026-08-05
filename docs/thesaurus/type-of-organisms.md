<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("type-of-organisms")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Biosafety Law - Type of Organisms

## Overview

This endpoint allows retrieval of terms associated with different types of organisms, providing details on organism groups like Animals, Plants, and Microorganisms. It supports multilingual output for titles and descriptions, allowing users to access organism classification, broader and narrower terms, and descriptions in multiple languages.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/TypeOfOrganisms/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
