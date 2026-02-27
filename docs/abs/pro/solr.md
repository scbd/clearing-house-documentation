<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import proAllRecordsWithQueryJson from "@/swagger/json/pro/solr/all-record-with-query";
import proAllRecordsJson from "@/swagger/json/pro/solr/all-record";
import proAllRecordsWithCountryJson from "@/swagger/json/pro/solr/all-record-with-country";
import proAllRecordsWithRegionJson from "@/swagger/json/pro/solr/all-record-with-region";
import proAllRecordsWithSubFiltersJson from "@/swagger/json/pro/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), proAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
