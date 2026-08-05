<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("cbd-subjects")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# CBD Subjects

## Overview

This endpoint provides access to a list of terms related to the subjects under the Convention on Biological Diversity (CBD). This endpoint allows users to retrieve and explore various subject terms that are relevant to CBD-related activities, documents, and reporting. These subjects are used to categorize and describe the content related to biodiversity and conservation.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
