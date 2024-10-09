<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cpcAllRecordsWithQueryJson from "@/swagger/json/cpc/solr/all-record-with-query.json";
import cpcAllRecordsJson from "@/swagger/json/cpc/solr/all-record.json";
import cpcAllRecordsWithCountryJson from "@/swagger/json/cpc/solr/all-record-with-country.json";
import cpcAllRecordsWithRegionJson from "@/swagger/json/cpc/solr/all-record-with-region.json";
import cpcAllRecordsWithSubFiltersJson from "@/swagger/json/cpc/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
