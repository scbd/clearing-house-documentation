<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import iraAllRecordsWithQueryJson from "@/swagger/json/ira/solr/all-record-with-query";
import iraAllRecordsJson from "@/swagger/json/ira/solr/all-record";
import iraAllRecordsWithCountryJson from "@/swagger/json/ira/solr/all-record-with-country";
import iraAllRecordsWithRegionJson from "@/swagger/json/ira/solr/all-record-with-region";
import iraAllRecordsWithSubFiltersJson from "@/swagger/json/ira/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
