<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("translation-type")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Measure - Translation Type

## Overview

This endpoint provides access to a list of terms related to different types of translations. This endpoint is used to retrieve information about various translation types that can be associated with documents and measures within the Convention on Biological Diversity (CBD). It helps in classifying and categorizing translations based on their type, ensuring proper documentation and management of translated materials.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/19E3C535-2919-4804-966C-E62728507291/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
