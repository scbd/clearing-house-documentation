<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import lmoAllRecordsWithQueryJson from "@/swagger/json/lmo/solr/all-record-with-query";
import lmoAllRecordsJson from "@/swagger/json/lmo/solr/all-record";
import lmoAllRecordsWithCountryJson from "@/swagger/json/lmo/solr/all-record-with-country";
import lmoAllRecordsWithRegionJson from "@/swagger/json/lmo/solr/all-record-with-region";
import lmoAllRecordsWithSubFiltersJson from "@/swagger/json/lmo/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
