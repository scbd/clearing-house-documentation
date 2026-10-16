<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("abs-genetic-resource-areas")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Authority - ABS Genetic Resource Areas

## Overview

This endpoint provides access to a list of areas or regions where genetic resources relevant to Access and Benefit-Sharing (ABS) agreements are found. This endpoint retrieves terms that classify different geographic or administrative areas associated with ABS agreements, which are crucial for managing and tracking the utilization of genetic resources within specific regions.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/545CD54C-CFF3-41E8-A003-FDD278426A3A/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
