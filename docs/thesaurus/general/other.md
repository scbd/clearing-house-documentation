<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.general.other.json";
</script>


# General - Other

## Endpoint

**GET** `/api/v2013/thesaurus/terms/5B6177DD-5E5E-434E-8CB7-D63D67D5EBED`

## Headers

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| Accept           | String | Result format. Allowed values: `application/json`  |
| Content-Type     | String | Request format. Allowed values: `application/json` |


## Playground

<SwaggerUI :swaggerJson="swaggerJson" />