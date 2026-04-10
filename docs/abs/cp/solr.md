<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cpAllRecordsWithQueryJson from "@/swagger/json/cp/solr/all-record-with-query";
import cpAllRecordsJson from "@/swagger/json/cp/solr/all-record";
import cpAllRecordsWithCountryJson from "@/swagger/json/cp/solr/all-record-with-country";
import cpAllRecordsWithRegionJson from "@/swagger/json/cp/solr/all-record-with-region";
import cpAllRecordsWithSubFiltersJson from "@/swagger/json/cp/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
