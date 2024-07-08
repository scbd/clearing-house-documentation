<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.delete.json";
</script>

# IRCC - Delete

## Endpoint

**DELETE** `/api/v2013/documents/:uid`

## Headers

| Field            | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Authorization    | String | Token to use to authenticate the request                                          |
| Realm (optional) | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM` |
| Accept           | String | Result format. Allowed values: `application/json`                                 |

## URL Parameters

| Field | Type   | Description                                                                                   |
| ----- | ------ | --------------------------------------------------------------------------------------------- |
| uid   | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />