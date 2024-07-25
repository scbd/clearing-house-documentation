<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.get.json";
</script>

# IRCC - Get

## Endpoint

This endpoint allows you to retrieve a specific document identified by its unique identifier (`uid`). The request uses the HTTP `GET` method to fetch the document details from the system.

**GET** `/api/v2013/documents/:uid`

## Headers

The headers required for making a request to this endpoint are detailed below. These headers are necessary for defining the context and format of the request and response.

| Field            | Type   | Description                                                                                      |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------ |
| Accept           | String &nbsp; | Result format. Allowed values: `*`, `application/json`<br>* = Raw data as submitted,<br>application/json = Try to cast result to the JSON format. |
| Realm (optional) | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM`                |

<!--@include: ../../../components/common/url-uid-parameter-section.md-->

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />
