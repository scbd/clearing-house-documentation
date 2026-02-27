<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nmccAllRecordsWithQueryJson from "@/swagger/json/nmcc/solr/all-record-with-query";
import nmccAllRecordsJson from "@/swagger/json/nmcc/solr/all-record";
import nmccAllRecordsWithCountryJson from "@/swagger/json/nmcc/solr/all-record-with-country";
import nmccAllRecordsWithRegionJson from "@/swagger/json/nmcc/solr/all-record-with-region";
import nmccAllRecordsWithSubFiltersJson from "@/swagger/json/nmcc/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
