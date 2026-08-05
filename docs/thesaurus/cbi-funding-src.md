<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("cbi-funding-src")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# CBI Funding Src

## Overview

This API provides access to terms related to Capacity Building Project Funding Types. These terms include metadata, multilingual titles, and relationships for categorizing funding mechanisms such as Bilateral. It serves as a foundational resource for organizations and systems managing funding classifications and capacity-building projects.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Capacity Building Project Funding Types/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
