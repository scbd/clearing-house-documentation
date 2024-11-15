<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/nmcc/thematic-areas.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Thematic Areas

## Overview

The Thesaurus Terms API allows users to fetch information related to terms within the thesaurus domain. Specifically, the provided endpoint retrieves terms for CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924, offering metadata such as multilingual titles, hierarchical relationships (broader and narrower terms), and unique identifiers. This API is essential for referencing structured data and managing terminologies across systems.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/CA9BBEA9-AAA7-4F2F-B3A3-7ED180DE1924/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />