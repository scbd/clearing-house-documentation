<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.measure.document-links-ext.json";
</script>

# Measure - Document Links Ext

## Endpoint

**GET** `/api.cbd.int/api/v2013/thesaurus/domains/ISO639-2/terms`

## Headers

| Field            | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| Accept           | String | Result format. Allowed values: `application/json`  |
| Content-Type     | String | Request format. Allowed values: `application/json` |


## Playground

<SwaggerUI :swaggerJson="swaggerJson" />