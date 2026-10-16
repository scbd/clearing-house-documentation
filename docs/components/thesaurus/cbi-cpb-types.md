<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("cbi-cpb-types")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# CBI CPB Types

## Overview

The Thesaurus Terms API enables retrieval of structured metadata for terms within specific thesaurus domains. The provided endpoint fetches data for the 5CA7AACE-CB79-4146-BF12-B3B1955AFF17 domain, offering multilingual information, hierarchical relationships, and detailed descriptions. This API is particularly useful for managing terminological data and supporting applications that rely on standardized vocabulary.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/5CA7AACE-CB79-4146-BF12-B3B1955AFF17/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
