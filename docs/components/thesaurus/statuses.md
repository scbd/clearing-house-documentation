<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("statuses")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Measure - Statuses

## Overview

This endpoint provides access to a list of statuses relevant to measures and policies related to the Convention on Biological Diversity (CBD). This endpoint is used to retrieve the various statuses that can be associated with measures or actions in the context of biodiversity management and conservation. These statuses help in tracking and reporting the progress, implementation, and effectiveness of measures.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/ED7CDBD8-7762-4A84-82DD-30C01458A799/terms`

Thesaurus reads are public and realm-agnostic.

## Usages

Record-type fields that draw their values from this vocabulary.

| Title | Field | Record type |
| --- | --- | --- |
| Legal status of the measure | `status` | MSR |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
