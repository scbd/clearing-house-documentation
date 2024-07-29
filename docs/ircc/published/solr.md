<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.solr.json";
</script>

# Solr - Query

This section describes how to use the Solr query endpoint to search and retrieve indexed documents. Apache Solr is an open-source search platform built on Apache Lucene, used for implementing search functionality in applications.

## Endpoint
This endpoint allows you to query the Solr index for documents. The request uses the HTTP `GET` method to perform a search.

**GET** `/api/v2013/index`



<!--@include: ../../../components/common/header-content-realm.md-->

## Query Parameters

The query parameters allow clients to filter and sort the search results based on specific criteria. Each parameter provides a way to customize the request to retrieve only the relevant documents. Refer to the [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html) for more details.

| Field      | Type   |   Description    |
| ---------- | ------ | ---------------- |
| q          | String &nbsp; | The q parameter is normally the main query for the request. See [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html) for more information. |
| fl         | String | TODO: Solr xxx                                        |
| sort       | String | TODO: Solr xxx                                        |
| start      | String | TODO: Solr xxx                                        |
| rows       | String | TODO: Solr xxx<br>Default value: 10                   |
| facet      | String | TODO: Solr xxx<br>Default value: false                |
| query      | String | TODO: facet must be set to true<br>TODO: Solr xxx     |
| field      | String | TODO: facet must be set to true<br>TODO: Solr xxx     |
| prefix     | String | TODO: facet must be set to true<br>TODO: Solr xxx     |

For additional reading and detailed documentation on Apache Solr, refer to the [Solr Guide](https://solr.apache.org/guide/solr/latest/index.html).


## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />