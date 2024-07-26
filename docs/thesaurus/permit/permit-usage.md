<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.permit.permit-usage.json";
</script>

# Permit - Permit Usage (Indicate if the permit or its equivalent covers commercial and/or non-commercial use)

## Endpoint

The endpoint for retrieving the terms that indicate if the permit or its equivalent covers commercial and/or non-commercial use.

**GET** `/api/v2013/thesaurus/domains/A7B77788-8C90-4849-9327-E181E9522F3A/terms`

<!--@include: ../../../components/common/header-content.md-->

## Usages

This table describes the `keywords` field that is used to indicate if the permit or its equivalent covers commercial and/or non-commercial use.

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Indicate if the permit or its equivalent covers commercial and/or non-commercial use          | keywords &nbsp; &nbsp; | <a href="/ircc/published/create">IRCC - create</a>  |

## Playground

<SwaggerUI :swaggerJson="swaggerJson" />