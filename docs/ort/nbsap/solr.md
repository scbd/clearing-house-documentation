<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nbsapAllRecordsWithQueryJson from "@/swagger/json/nbsap/solr/all-record-with-query";
import nbsapAllRecordsJson from "@/swagger/json/nbsap/solr/all-record";
import nbsapAllRecordsWithCountryJson from "@/swagger/json/nbsap/solr/all-record-with-country";
import nbsapAllRecordsWithRegionJson from "@/swagger/json/nbsap/solr/all-record-with-region";
import nbsapAllRecordsWithSubFiltersJson from "@/swagger/json/nbsap/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
