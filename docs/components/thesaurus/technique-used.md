<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("technique-used")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Modified Organism - Technique Used

## Overview

This endpoint allows access to a list of terms related to techniques used for modified organisms, as defined in the thesaurus. It is part of the API for querying and retrieving technical terms, which can be applied in fields such as scientific research, data categorization, or dropdown selections. The endpoint returns a structured list of technique names, identifiers, and multilingual titles, useful for accurate terminology referencing and application.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/ABE9DCE3-92BA-4D5D-8948-7F7E541EEC6B/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
