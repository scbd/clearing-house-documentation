<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("aichi-targets")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Aichi Targets

## Overview

This endpoint retrieves terms related to the Aichi Biodiversity Targets, which are a set of global biodiversity goals established under the Convention on Biological Diversity (CBD). These terms represent key targets, such as raising awareness of biodiversity values, aimed at guiding conservation efforts, sustainability practices, and policy-making. By accessing these terms, users can find detailed, standardized definitions to support awareness, reporting, and educational initiatives around biodiversity.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/AICHI-TARGETS/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
