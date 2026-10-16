<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("permit-usage")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Permit - Permit Usage (Indicate if the permit or its equivalent covers commercial and/or non-commercial use)

## Overview

This endpoint allows you to retrieve terms that specify whether a permit or its equivalent covers commercial and/or non-commercial use. This endpoint is useful for identifying the scope of usage rights associated with a permit, including whether it permits commercial activities, non-commercial activities, or both. The data obtained can help in understanding and managing the terms of use for various permits and ensuring compliance with their conditions.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/A7B77788-8C90-4849-9327-E181E9522F3A/terms`

Thesaurus reads are public and realm-agnostic.

## Usages

Record-type fields that draw their values from this vocabulary.

| Title | Field | Record type |
| --- | --- | --- |
| Indicate if the permit or its equivalent covers commercial and/or non-commercial use | `keywords &nbsp; &nbsp;` | IRCC - create |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
