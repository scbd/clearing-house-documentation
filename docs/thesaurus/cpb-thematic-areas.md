<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("cpb-thematic-areas")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# CPB Thematic Areas

## Overview

This endpoint retrieves a list of terms associated with biosafety policy and regulation under the Convention on Biological Diversity (CBD). These terms are essential for understanding global policies and regulatory frameworks related to biosafety in biotechnology, which ensure the safe use and management of biological technology applications. This data supports the documentation and analysis of biosafety measures worldwide, aiding in compliance, policy development, and risk prevention.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/043C7F0D-2226-4E54-A56F-EE0B74CCC984/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
