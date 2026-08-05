<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("key-areas")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Key Areas

## Overview

This endpoint provides access to key areas of capacity building related to implementing and complying with the obligations of international biodiversity protocols. These key areas outline the specific capabilities necessary for countries and organizations to meet protocol requirements, promoting consistent and effective policy enforcement globally. This endpoint supports entities working on protocol compliance by providing a structured list of terms, enhancing transparency and accessibility in international biodiversity and environmental commitments.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/2B2A5166-F949-4B1E-888F-A7976E76320B/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
