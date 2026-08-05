<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("all-keywords")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# All Keywords

## Overview

This API endpoint provides terms and metadata related to "Access to Genetic Resources". The endpoint delivers detailed information about specific terms, their identifiers, multilingual titles, and their relationships to other terms. This is critical for managing compliance, legal frameworks, and the equitable sharing of benefits derived from genetic resources. It also supports multilingual data, aiding global collaboration and accessibility.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
