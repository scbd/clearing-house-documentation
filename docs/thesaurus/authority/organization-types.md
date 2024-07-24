<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.organization-types.json";
</script>

# Organization Types

## Endpoint

**GET** `/api/v2013/thesaurus/domains/Organization%20Types/terms`

## Headers

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| Accept           | String | Result format. Allowed values: `application/json`  |
| Content-Type     | String | Request format. Allowed values: `application/json` |

## Playground

<SwaggerUI :swaggerJson="swaggerJson" />