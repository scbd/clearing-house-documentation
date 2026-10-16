<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("cpb-functions")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Authority - CBP Functions

## Overview

This endpoint provides access to a list of functions or roles related to the Convention on Biological Diversity (CBD) protocols and their implementation. This endpoint retrieves terms that classify different functions or responsibilities within the CBD framework, essential for understanding and managing various aspects of the Convention's application.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Subject Areas/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
