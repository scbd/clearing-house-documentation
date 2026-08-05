<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("type-of-documents")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Measure - Type of Documents

## Overview

This endpoint provides access to a list of standardized types of documents used within the context of the Convention on Biological Diversity (CBD). This endpoint is designed to help users retrieve a comprehensive list of document types that are relevant for documenting and reporting various activities and measures related to biodiversity and genetic resources.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/144CF550-7629-43F3-817E-CACDED34837E/terms`

Thesaurus reads are public and realm-agnostic.

## Usages

Record-type fields that draw their values from this vocabulary.

| Title | Field | Record type |
| --- | --- | --- |
| Type of document/measure | `type` | MSR |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
