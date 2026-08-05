<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("organism-common-uses")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Modified Organism - Organism Common Uses

## Overview

This endpoint provides access to a list of common uses of organisms, as defined in the thesaurus. It enables retrieval of terms related to various applications of organisms, such as biocontrol. These terms can be used in fields like environmental research, agricultural planning, and data categorization. The endpoint returns a structured list including identifiers, names, and multilingual titles for consistent reference and integration into various applications.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/OrganismCommonUses/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
