<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("dna-sequence-family")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# DNA Sequence - DNA Sequence Family

## Overview

This endpoint provides access to terms related to Protein Coding Sequences within genetic data. These sequences are key genetic elements that carry instructions for synthesizing proteins, essential for biological functions. Specific terms in this domain cover sequences like genes or complementary DNA (cDNA), which are fundamental in fields like genetic engineering, molecular biology, and biotechnology.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/82DAAF04-6698-4CA6-81D5-F200AE64C63A/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
