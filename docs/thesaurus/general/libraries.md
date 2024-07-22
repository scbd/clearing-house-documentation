<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.general.libraries.json";
</script>

# General - Libraries

## Endpoint

**GET** `/api/v2013/thesaurus/domains/cbdClearingHouses/terms`

## Headers

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| Accept           | String | Result format. Allowed values: `application/json`  |
| Content-Type     | String | Request format. Allowed values: `application/json` |



## Playground

<SwaggerUI :swaggerJson="swaggerJson" />