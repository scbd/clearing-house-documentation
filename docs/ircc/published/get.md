<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.get.json";
</script>

# IRCC - Get

## Endpoint

**GET** `/api/v2013/documents/:uid`

## Headers

| Field            | Type   | Description                                                                                      |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------ |
| Accept           | String | Result format. Allowed values: `*`, `application/json`<br>* = Raw data as submitted,<br>application/json = Try to cast result to the JSON format. |
| Realm (optional) | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM`                |

## URL Parameters

| Field | Type   | Description                                                                                   |
| ----- | ------ | --------------------------------------------------------------------------------------------- |
| uid   | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />
