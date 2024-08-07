<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.list.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];

</script>

# Draft Records

The "Draft Records" endpoint allows you to retrieve draft records from the system. This is useful for accessing records that are still being prepared or are not yet finalized. The endpoint supports various query parameters to filter, sort, and paginate the results.

## Endpoint

This endpoint is used to retrieve a list of documents available in the IRCC system. The request uses the HTTP `GET` method to fetch a collection of documents based on the specified query parameters.

**GET** `/api/v2013/documents`

This HTTP GET request retrieves draft records from the specified endpoint. It can be used to access documents that are in draft status and need to be reviewed or finalized.


<!--@include: ../../../components/common/header-authorization-realm.md-->

## Query Parameters

Query parameters enable you to customize your request to retrieve specific sets of documents based on your needs. The parameters available for this endpoint are:

| Field                 | Type   | Description     |
| --------------------- | ------ | --------------- |
| collection (optional) | String &nbsp;&nbsp;&nbsp;&nbsp; | The collection system query option allows clients to filter a collection of resources. Allowed values: `my`, `mydrafts`  |
| $filter (optional)    | String | The `$filter` system query option allows clients to filter a collection of resources. See: [OData $filter](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#SystemQueryOptions)   |
| $orderby (optional)   | String | The `$orderby` system query option allows clients to request resources in a particular order. See: [OData $orderby](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#OrderbySystemQueryOption)  |
| $top (optional)       | String | The `$top` system query option requests the number of items in the queried collection to be included in the result. See: [OData $top](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#TopSystemQueryOption). A client can request a particular page of items by combining `$top` and `$skip`.
| $skip (optional)   | String | The `$skip` query option requests the number of items in the queried collection that are to be skipped and not included in the result. See: [OData $skip](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/#SkipSystemQueryOption). A client can request a particular page of items by combining `$top` and `$skip`. |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
