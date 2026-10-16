<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import { thesaurusTermsSpec } from "@/swagger/generators/thesaurus"
import { vocabularyBySlug } from "@/swagger/vocabularies"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl } = useClearingHouse()
const vocab = vocabularyBySlug("jurisdictions")

const swaggerSpecs = [
  { json: thesaurusTermsSpec({ apiUrl, path: vocab.path, name: vocab.name }), protected: false },
];
</script>

# Jurisdictions

## Overview

This endpoint provides access to a list of jurisdictional terms used in the context of authority and governance. This endpoint retrieves terms related to various jurisdictions, which are essential for defining and categorizing different areas of legal and administrative authority. Jurisdictions can represent geographic regions, governmental units, or administrative divisions relevant to legal and policy frameworks.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/D7BD5BDE-A6B9-4261-B788-16839CCC4F7E/terms`

Thesaurus reads are public and realm-agnostic.

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
