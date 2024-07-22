<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.permit.permit-usage.json";
</script>

# Permit - Permit Usage (Indicate if the permit or its equivalent covers commercial and/or non-commercial use)

## Endpoint

**GET** `/api/v2013/thesaurus/domains/A7B77788-8C90-4849-9327-E181E9522F3A/terms`

## Headers

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| Accept           | String | Result format. Allowed values: `application/json`  |
| Content-Type     | String | Request format. Allowed values: `application/json` |

## Usages

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Indicate if the permit or its equivalent covers commercial and/or non-commercial use          | keywords &nbsp; &nbsp; | <a href="/ircc/published/create">IRCC - create</a>  |

## Playground

<SwaggerUI :swaggerJson="swaggerJson" />