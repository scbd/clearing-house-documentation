<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("document-links-ext")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Measure - Document Links Ext

## Overview

This endpoint is used to retrieve information about language codes that can be used in the context of documents and measures within the Convention on Biological Diversity (CBD). It helps in associating documents with specific languages, ensuring proper localization and accessibility.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/ISO639-2/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
