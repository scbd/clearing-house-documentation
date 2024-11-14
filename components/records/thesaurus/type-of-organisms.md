<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/biosafety-law/type-of-organisms.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Biosafety Law - Type of Organisms

## Overview

This endpoint allows retrieval of terms associated with different types of organisms, providing details on organism groups like Animals, Plants, and Microorganisms. It supports multilingual output for titles and descriptions, allowing users to access organism classification, broader and narrower terms, and descriptions in multiple languages.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/TypeOfOrganisms/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />