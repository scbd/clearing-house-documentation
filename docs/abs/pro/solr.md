<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import proAllRecordsWithQueryJson from "@/swagger/json/pro/solr/all-record-with-query.json";
import proAllRecordsJson from "@/swagger/json/pro/solr/all-record.json";
import proAllRecordsWithCountryJson from "@/swagger/json/pro/solr/all-record-with-country.json";
import proAllRecordsWithRegionJson from "@/swagger/json/pro/solr/all-record-with-region.json";
import proAllRecordsWithSubFiltersJson from "@/swagger/json/pro/solr/all-record-with-subfilters.json";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const baseJson = swaggerJson(useClearingHouse().apiUrl)

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
