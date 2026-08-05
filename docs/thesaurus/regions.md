<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("regions")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# General - Regions

## Overview

This endpoint provides access to a standardized list of geographic regions as defined in the thesaurus. This endpoint is part of the system used to ensure consistent terminology for geographic regions across various applications and services. It is particularly useful for applications that need to reference or display geographic regions in a standardized manner, such as for geographical data analysis, reporting, or selection in forms.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/regions/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
