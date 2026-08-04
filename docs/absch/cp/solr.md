<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import cp from "@/swagger/schemas/abs/cp"
import { solrSpecs } from "@/swagger/generators/solr"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = solrSpecs({ apiUrl, realm, schema: cp })
  .map((json) => ({ json, protected: false }));
</script>

# Checkpoint - Search

> **Draft** — pending review (REBUILD.md review gate).

## Overview

Searches public Checkpoint records of the ABS Clearing-House through the Apache Solr index. The playground below shows the common query patterns: all records of the type, filtered by country, by free text, by region, and with combined sub-filters.

## Endpoint

**GET** `/api/v2013/index`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `Realm` HTTP header`)

## Query Parameters

Refer to the [Solr query syntax](https://solr.apache.org/guide/8_11/query-syntax-and-parsing.html) for the full expression language.

| Parameter | Description |
| --- | --- |
| `q` | The main query, e.g. `schema_s:absCheckpoint`. Combine criteria with `AND`, e.g. `schema_s:absCheckpoint AND text_EN_txt:biodiversity`. |
| `fq` | Filter query applied on top of `q`, e.g. `government_s:ht` (ISO country code) or `regions_ss:africa`. |
| `fl` | Comma-separated field names to include in the response. |
| `sort` | Sort order, e.g. `updatedDate_dt desc`. |
| `start` | Offset of the first result (paging). |
| `rows` | Number of results to return (default 10). |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
