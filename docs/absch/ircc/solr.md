<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import irccAllRecordsWithQueryJson from "@/swagger/json/ircc/solr/all-record-with-query";
import irccAllRecordsJson from "@/swagger/json/ircc/solr/all-record";
import irccAllRecordsWithCountryJson from "@/swagger/json/ircc/solr/all-record-with-country";
import irccAllRecordsWithRegionJson from "@/swagger/json/ircc/solr/all-record-with-region";
import irccAllRecordsWithSubFiltersJson from "@/swagger/json/ircc/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
