<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("ort-jurisdictions")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# ORT Jurisdictions

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 50AC1489-92B8-4D99-965A-AAE97A80F38E domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/50AC1489-92B8-4D99-965A-AAE97A80F38E/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
