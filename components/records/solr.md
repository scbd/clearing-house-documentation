# List Public Records

## Overview
This endpoint provides functionality to search and retrieve indexed documents using Apache Solr. Apache Solr is an open-source search platform built on Apache Lucene that offers powerful full-text search capabilities. This endpoint allows you to query the Solr index to find and access public records based on specified search criteria.


## Endpoint
**GET** `/api/v2013/index`

## Headers
<!--@include: ../common/header/realm-accept.md-->

## Query Parameters

The query parameters allow clients to filter and sort the search results based on specific criteria. Each parameter provides a way to customize the request to retrieve only the relevant documents. Refer to the [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html) for more details.

| Field | Type  | Description  |
| ----- | ----- | ------------ |
| q     | String | The main query parameter used to search for documents. It specifies the search criteria and is the most crucial parameter. For detailed syntax, refer to the [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html). <br /><br />[The detail breakdown is mentioned in the below table](/ircc/solr.html#detailed-breakdown-of-q-parameter) |
| fl    | String              | Fields to return in the search results. Use comma-separated field names to specify which fields should be included in the response.     |
| sort  | String              | Specifies the sort order of the results. The format is fieldname desc for descending or fieldname asc for ascending.   |
| start | String              | The starting offset for the results. This parameter allows pagination by specifying the index of the first result to return.             |
| rows  | String              | The number of results to return. Default value is 10 if not specified.                             |
| field | String              | Specifies the fields to use for faceting. Requires facet=true to be enabled.                       |

### Detailed Breakdown of `q` Parameter

The `q` parameter is used to define the search criteria in Solr queries. It can include several sub-parameters to filter and sort the results.

| Field      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| realm      | String | The realm parameter specifies the realm of the documents to be searched. It filters results based on the realm value. Example: `realm_ss:ABS-DEV`.                                              |
| schema     | String              | The schema parameter defines the schema to filter the documents. Example: `schema_s:absPermit`.  |
| government | String              | The government parameter filters documents based on the government ISO codes. Example: `government_s:ht`. The ISO codes can be received from [the countries API](/thesaurus/general/countries). |
