<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("organization-types")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Organization Types

## Overview

This endpoint provides a list of terms related to different types of organizations. This endpoint allows users to retrieve a comprehensive set of terms that classify and categorize various organizations based on their type. This information can be used for data classification, filtering, and integration tasks where understanding the types of organizations is necessary.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Organization%20Types/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
