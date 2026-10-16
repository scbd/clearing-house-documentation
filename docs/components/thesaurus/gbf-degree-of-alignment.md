<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("gbf-degree-of-alignment")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# GBF Degree of Alignment

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the GBF-DEGREE-OF-ALIGNMENT domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/GBF-DEGREE-OF-ALIGNMENT/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
