<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("resource-type-vlr")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Resource Type VLR

## Overview

This endpoint provides access to a collection of standardized resource types within the Virtual Resource Library under the Convention on Biological Diversity (CBD). These resource types encompass various categories of library resources that support research, compliance, and knowledge-sharing related to biodiversity. By accessing these terms, users can retrieve structured information about resource categories, which can aid in consistent documentation and retrieval of biodiversity-related data.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/A762DF7E-B8D1-40D6-9DAC-D25E48C65528/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
