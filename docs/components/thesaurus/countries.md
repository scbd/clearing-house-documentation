<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("countries")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# General - Countries

## Overview

This endpoint provides access to a list of country terms from the thesaurus. This endpoint is part of the API for querying and retrieving terms related to countries, which can be used in various applications such as form fields, dropdowns, or data validation. It returns a comprehensive list of country names and related information as defined in the thesaurus.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/countries/terms`

Thesaurus reads are public and realm-agnostic.

## Usages

Record-type fields that draw their values from this vocabulary.

| Title | Field | Record type |
| --- | --- | --- |
| Country | `government` | IRCC |
| Country | `government` | Contact |
| Country | `country` | NFP |
| Country | `government` | MSR |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
