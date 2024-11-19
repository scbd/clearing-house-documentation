<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/resource/bch-ra-author-affiliation.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# BCH RA Author Affiliation

## Overview

This endpoint retrieves a list of organization types relevant to the Convention on Biological Diversity (CBD). The organization types provide standardized terms for identifying various categories of organizations involved in biodiversity and environmental research, policy, and advocacy. These terms help users classify and access information related to specific organizational roles in conservation, education, and sustainable use of biodiversity.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/Organization Types/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />