<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.delete.json";
</script>

# IRCC - Delete

## Endpoint

This endpoint allows you to delete a specific document identified by its unique identifier (`uid`). The request uses the HTTP `DELETE` method to remove the document from the system.

**DELETE** `/api/v2013/documents/:uid`

## Headers

The headers required for making a request to this endpoint are detailed below. These headers are necessary for authentication, specifying the context, and defining the format of the request and response.

| Field            | Type &nbsp;    | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Authorization    | String   | Token to use to authenticate the request                                          |
| Realm (optional) | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM` |
| Accept           | String | Result format. Allowed values: `application/json`                                 |

Headers required to authenticate and define the context and format of the request and response. The `Authorization` header must contain a valid token, while the `Content-Type` and `Accept` headers specify the format of the document and response, respectively. [Here are the steps to get the Authorization token](/user/authentication).

## URL Parameters

| Field | Type   | Description                                                                                   |
| ----- | ------ | --------------------------------------------------------------------------------------------- |
| uid   | String &nbsp; | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

URL parameters include essential identifiers for the document. The `uid` parameter uniquely identifies the document in the system.

## Query Parameters

| Field  | Type   | Description                                               |
| ------ | ------ | --------------------------------------------------------- |
| schema | String | Specify the document common-format posted (type / schema) |

Query parameters provide additional options for the request. The `schema` parameter defines the type of document being posted.

<!--@include: ../../../components/common/environment-urls.md-->

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />