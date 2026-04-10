<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cnaAllRecordsWithQueryJson from "@/swagger/json/cna/solr/all-record-with-query";
import cnaAllRecordsJson from "@/swagger/json/cna/solr/all-record";
import cnaAllRecordsWithCountryJson from "@/swagger/json/cna/solr/all-record-with-country";
import cnaAllRecordsWithRegionJson from "@/swagger/json/cna/solr/all-record-with-region";
import cnaAllRecordsWithSubFiltersJson from "@/swagger/json/cna/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
