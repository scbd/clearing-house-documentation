<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import decAllRecordsWithQueryJson from "@/swagger/json/dec/solr/all-record-with-query";
import decAllRecordsJson from "@/swagger/json/dec/solr/all-record";
import decAllRecordsWithCountryJson from "@/swagger/json/dec/solr/all-record-with-country";
import decAllRecordsWithRegionJson from "@/swagger/json/dec/solr/all-record-with-region";
import decAllRecordsWithSubFiltersJson from "@/swagger/json/dec/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
