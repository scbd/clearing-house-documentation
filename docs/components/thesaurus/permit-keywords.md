<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("permit-keywords")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Permit - Permit Keywords (Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent)

## Overview

This endpoint provides access to a list of terms relevant to describing the subject-matter or genetic resources covered by a permit or its equivalent. This endpoint is useful for retrieving keywords that categorize and detail the scope of the permit, including the genetic resources or subject-matter it pertains to. The keywords can be used to annotate or classify permits, facilitating better management and retrieval of permit-related data.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms`

Thesaurus reads are public and realm-agnostic.

## Usages

Record-type fields that draw their values from this vocabulary.

| Title | Field | Record type |
| --- | --- | --- |
| Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent | `keywords` | IRCC - create |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
