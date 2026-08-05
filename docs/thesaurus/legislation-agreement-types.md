<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("legislation-agreement-types")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Biosafety Law - Legislation Agreement Types

## Overview

This endpoint provides access to a curated list of terms related to various types of legislation and agreements as defined in the thesaurus. It allows users to retrieve structured information, including multilingual titles and metadata, on legal and agreement terms such as "Law." This can support applications in areas involving legal reference, regulatory compliance, or international agreements, enhancing accessibility to a wide range of legislative terminologies.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Legislation And Agreement Types/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
