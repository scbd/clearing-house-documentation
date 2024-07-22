<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.jurisdictions.json";
</script>

# Authority - Jurisdictions

## Endpoint

**GET** `/api/v2013/thesaurus/domains/D7BD5BDE-A6B9-4261-B788-16839CCC4F7E/terms`

## Headers

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| Accept           | String | Result format. Allowed values: `application/json`  |
| Content-Type     | String | Request format. Allowed values: `application/json` |

## Playground

<SwaggerUI :swaggerJson="swaggerJson" />