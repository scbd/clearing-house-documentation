<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("law-jurisdictions")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Biosafety Law - Law Jurisdictions

## Overview

This endpoint provides access to a list of terms from the thesaurus related to regional and multilateral topics. It enables users to retrieve structured information on various aspects of regional or multilateral agreements, policies, or frameworks. Each term includes multilingual titles, identifiers, and relevant metadata, facilitating applications in areas such as international policy, cooperation, and data classification.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/5001DC0F-908A-4983-8962-EBF4FC18F245/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
