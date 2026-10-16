<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("subject-areas")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Biosafety Law - Subject Areas

## Overview

This endpoint provides access to a range of terms related to various subject areas. It enables users to retrieve organized information on subject-specific terms and narrower classifications, making it useful for applications that require structured access to biosafety functions, regulatory categories, and relevant terms in multilingual formats.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Subject Areas/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
