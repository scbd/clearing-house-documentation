<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("libraries")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# General - Libraries

## Overview

This endpoint allows you to retrieve a list of terms related to CBD clearing houses from the thesaurus. This API endpoint is part of the system that provides standardized terminology used across various applications and systems. It is useful for applications that need to reference or display terms associated with CBD clearing houses in a consistent manner.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/cbdClearingHouses/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
