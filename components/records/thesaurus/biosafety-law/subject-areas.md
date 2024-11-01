<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/biosafety-law/subject-areas.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Biosafety Law - Subject Areas

## Overview

This endpoint provides access to a range of terms related to various subject areas. It enables users to retrieve organized information on subject-specific terms and narrower classifications, making it useful for applications that require structured access to biosafety functions, regulatory categories, and relevant terms in multilingual formats.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/Subject Areas/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />