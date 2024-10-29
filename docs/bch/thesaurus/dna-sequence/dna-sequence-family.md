<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/dna-sequence/dna-sequence-family.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# DNA Sequence - DNA Sequence Family

## Overview

This endpoint provides access to terms related to Protein Coding Sequences within genetic data. These sequences are key genetic elements that carry instructions for synthesizing proteins, essential for biological functions. Specific terms in this domain cover sequences like genes or complementary DNA (cDNA), which are fundamental in fields like genetic engineering, molecular biology, and biotechnology.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/82DAAF04-6698-4CA6-81D5-F200AE64C63A/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />