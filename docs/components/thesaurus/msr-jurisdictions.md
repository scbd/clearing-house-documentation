<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("msr-jurisdictions")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Measure - Jurisdictions

## Overview

This endpoint provides access to a list of jurisdictions relevant to the Convention on Biological Diversity (CBD). This endpoint is intended to help users retrieve a comprehensive list of geographic and administrative jurisdictions that are associated with measures and policies related to biodiversity and genetic resources. The endpoint supports the standardization of jurisdictional data for better reporting, compliance, and data management.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/7A56954F-7430-4B8B-B733-54B8A5E7FF40/terms`

Thesaurus reads are public and realm-agnostic.

## Usages

Record-type fields that draw their values from this vocabulary.

| Title | Field | Record type |
| --- | --- | --- |
| Area of jurisdiction | `jurisdiction` | MSR |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
