<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.solr.json";
</script>

# Solr - Query

## Endpoint

**GET** `/api/v2013/index`


## Headers

| Field            | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| Authorization | String | Token to use to authenticate the request                                          |

## Query Parameters

| Field      | Type   | Description                                                                                                                                                          |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| q          | String | The q parameter is normally the main query for the request. See [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html) for more information. |
| fl         | String | TODO: Solr xxx                                                                                                                                                       |
| sort       | String | TODO: Solr xxx                                                                                                                                                       |
| start      | String | TODO: Solr xxx                                                                                                                                                       |
| rows       | String | TODO: Solr xxx<br>Default value: 10                                                                                                                                  |
| facet      | String | TODO: Solr xxx<br>Default value: false                                                                                                                               |
| query      | String | TODO: facet must be set to true<br>TODO: Solr xxx                                                                                                                    |
| field      | String | TODO: facet must be set to true<br>TODO: Solr xxx                                                                                                                    |
| prefix     | String | TODO: facet must be set to true<br>TODO: Solr xxx                                                                                                                    |


## Playground

<SwaggerUI :swaggerJson="swaggerJson" :protected="true" />