<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import iraAllRecordsWithQueryJson from "@/swagger/json/ira/solr/all-record-with-query.json";
import iraAllRecordsJson from "@/swagger/json/ira/solr/all-record.json";
import iraAllRecordsWithCountryJson from "@/swagger/json/ira/solr/all-record-with-country.json";
import iraAllRecordsWithRegionJson from "@/swagger/json/ira/solr/all-record-with-region.json";
import iraAllRecordsWithSubFiltersJson from "@/swagger/json/ira/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
