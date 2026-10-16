<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("abs-functions")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Authority - ABS Functions

## Overview

This endpoint retrieves a list of functions related to Access and Benefit Sharing (ABS) under the Convention on Biological Diversity (CBD). These functions are essential for understanding and documenting the roles and responsibilities associated with ABS agreements and practices. This endpoint helps in accessing standardized terms that define various ABS functions, which can be utilized for compliance, reporting, and management purposes.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/8102E184-E282-47F7-A49F-4C219B0EE235/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
