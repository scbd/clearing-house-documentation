<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/authority/cbd-subjects.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CBD Subjects

## Overview

This endpoint provides access to a list of terms related to the subjects under the Convention on Biological Diversity (CBD). This endpoint allows users to retrieve and explore various subject terms that are relevant to CBD-related activities, documents, and reporting. These subjects are used to categorize and describe the content related to biodiversity and conservation.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />