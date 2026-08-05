<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("cpb-organism-types")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Authority - CPB Organism Types

## Overview

This endpoint provides a list of organism types categorized under the Convention on Biological Diversity's (CBD). This endpoint is essential for retrieving standardized terms related to different types of organisms as defined in the context of biosafety and biodiversity management.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/TypeOfOrganisms/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
