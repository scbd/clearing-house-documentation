<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.document.get.json";
</script>

# Fetching IRCC Documents

## Endpoint

**GET** `/api/v2013/documents`

## Headers

| Field            | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Authorization    | String | Token to use to authenticate the request                                          |
| Accept           | String | Result format. Allowed values: `application/json`                                 |
| Realm (optional) | String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM` |

## Query Parameters

| Field                 | Type   | Description                                                                                                                                                                                                                                                                                                                               |
| --------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| collection (optional) | String | The collection system query option allows clients to filter a collection of resources. Allowed values: `my`, `mydrafts`                                                                                                                                                                                                                   |
| $filter (optional)    | String | The `$filter` system query option allows clients to filter a collection of resources. See: [OData $filter](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#SystemQueryOptions)                                                                                                                                     |
| $orderby (optional)   | String | The `$orderby` system query option allows clients to request resources in a particular order. See: [OData $orderby](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#OrderbySystemQueryOption)                                                                                                                      |
| $top (optional)       | String | The `$top` system query option requests the number of items in the queried collection to be included in the result. See: [OData $top](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#TopSystemQueryOption). A client can request a particular page of items by combining `$top` and `$skip`.                      |
| $skip (optional)      | String | The `$skip` query option requests the number of items in the queried collection that are to be skipped and not included in the result. See: [OData $skip](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#SkipSystemQueryOption). A client can request a particular page of items by combining `$top` and `$skip`. |

## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />
