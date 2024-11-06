<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import proAllRecordsWithQueryJson from "@/swagger/json/pro/solr/all-record-with-query.json";
import proAllRecordsJson from "@/swagger/json/pro/solr/all-record.json";
import proAllRecordsWithCountryJson from "@/swagger/json/pro/solr/all-record-with-country.json";
import proAllRecordsWithRegionJson from "@/swagger/json/pro/solr/all-record-with-region.json";
import proAllRecordsWithSubFiltersJson from "@/swagger/json/pro/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
