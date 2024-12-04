<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/cdi/cbi-cats.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# CBI Cats

## Overview

The Thesaurus Terms API provides access to structured metadata for terms within specific domains of a thesaurus. This particular endpoint retrieves terms from the 579F448B-ECA8-4258-B130-3EAA68056D1F domain, allowing users to query multilingual term details, hierarchical relationships, and additional metadata. It is valuable for applications requiring consistent vocabulary and term management.



## Endpoint

**GET** `/api/v2013/thesaurus/domains/579F448B-ECA8-4258-B130-3EAA68056D1F/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />