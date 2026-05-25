<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import orgAllRecordsWithQueryJson from "@/swagger/json/org/solr/all-record-with-query";
import orgAllRecordsJson from "@/swagger/json/org/solr/all-record";
import orgAllRecordsWithCountryJson from "@/swagger/json/org/solr/all-record-with-country";
import orgAllRecordsWithRegionJson from "@/swagger/json/org/solr/all-record-with-region";
import orgAllRecordsWithSubFiltersJson from "@/swagger/json/org/solr/all-record-with-subfilters";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
