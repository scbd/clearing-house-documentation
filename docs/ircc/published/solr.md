<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.solr.json";
</script>

# List Public Records

This section describes how to use the Solr query endpoint to search and retrieve indexed documents. Apache Solr is an open-source search platform built on Apache Lucene, used for implementing search functionality in applications.

## Endpoint
This endpoint allows you to query the Solr index for documents. The request uses the HTTP `GET` method to perform a search.

**GET** `/api/v2013/index`



<!--@include: ../../../components/common/header-content-realm.md-->

## Query Parameters

The query parameters allow clients to filter and sort the search results based on specific criteria. Each parameter provides a way to customize the request to retrieve only the relevant documents. Refer to the [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html) for more details.

| Field      | Type   |   Description    |
| ---------- | ------ | ---------------- |
| q          | String &nbsp;&nbsp; | The main query parameter used to search for documents. It specifies the search criteria and is the most crucial parameter.  For detailed syntax, refer to the [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html). |
| fl         | String | Fields to return in the search results. Use comma-separated field names to specify which fields should be included in the response.                                        |
| sort       | String | Specifies the sort order of the results. The format is fieldname desc for descending or fieldname asc for ascending.                                       |
| start      | String | The starting offset for the results. This parameter allows pagination by specifying the index of the first result to return.                                       |
| rows       | String | The number of results to return. Default value is 10 if not specified.                  |
| facet      | String | Enables faceting, which provides aggregations of data based on field values. Default value is false.           |
| query      | String | TODO: facet must be set to true<br>TODO: Solr xxx     |
| field      | String | Specifies the fields to use for faceting. Requires facet=true to be enabled.     |
| prefix     | String | Filters facet results to include only those values starting with the given prefix. Requires facet=true.     |


## Playground

<SwaggerUI :swaggerJson="swaggerJson"/>