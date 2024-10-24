<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/permit/permit-usage.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Permit - Permit Usage (Indicate if the permit or its equivalent covers commercial and/or non-commercial use)

## Overview

This endpoint allows you to retrieve terms that specify whether a permit or its equivalent covers commercial and/or non-commercial use. This endpoint is useful for identifying the scope of usage rights associated with a permit, including whether it permits commercial activities, non-commercial activities, or both. The data obtained can help in understanding and managing the terms of use for various permits and ensuring compliance with their conditions.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/A7B77788-8C90-4849-9327-E181E9522F3A/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Usages

This table describes the `keywords` field that is used to indicate if the permit or its equivalent covers commercial and/or non-commercial use.

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Indicate if the permit or its equivalent covers commercial and/or non-commercial use          | keywords &nbsp; &nbsp; | <a href="/ircc/published/create">IRCC - create</a>  |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />