<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.abs-genetic-resource-areas.json";
</script>

# Authority - ABS Genetic Resource Areas

## Endpoint

**GET** `/api/v2013/thesaurus/domains/545CD54C-CFF3-41E8-A003-FDD278426A3A/terms`

## Headers

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| Accept           | String | Result format. Allowed values: `application/json`  |
| Content-Type     | String | Request format. Allowed values: `application/json` |


## Playground

<SwaggerUI :swaggerJson="swaggerJson" />