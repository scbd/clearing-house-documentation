<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("bch-ra-author-affiliation")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# BCH RA Author Affiliation

## Overview

This endpoint retrieves a list of organization types relevant to the Convention on Biological Diversity (CBD). The organization types provide standardized terms for identifying various categories of organizations involved in biodiversity and environmental research, policy, and advocacy. These terms help users classify and access information related to specific organizational roles in conservation, education, and sustainable use of biodiversity.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Organization Types/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
