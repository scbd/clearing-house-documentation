<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("transboundary-movement-types")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Biosafety Decision - Transboundary Movement Types

## Overview

This endpoint is designed to retrieve terms associated with transboundary movements of Living Modified Organisms (LMOs).Understanding this term is crucial for stakeholders involved in the international movement of LMOs, including regulatory bodies, environmental organizations, and companies engaged in biotechnology. The endpoint ensures that users can access standardized definitions and legal references, which can aid in compliance and risk management related to the transboundary movement of LMOs.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/TransboundaryMovementTypes/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
