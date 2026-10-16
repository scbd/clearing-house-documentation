<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("decision-lmo-ffp-subject")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Biosafety Decision - Decision LMO FFP Subject

## Overview

This endpoint retrieves terms specifically related to LMOs (Living Modified Organisms) that are intended for direct use as food. It provides multilingual titles to facilitate understanding across different language speakers. The data aims to support stakeholders involved in food safety, regulatory compliance, and biodiversity management by providing clear and accessible terminology related to the use of genetically modified organisms in food production.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/DecisionLMOFFPSubject/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
