<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cppAllRecordsWithQueryJson from "@/swagger/json/cpp/solr/all-record-with-query";
import cppAllRecordsJson from "@/swagger/json/cpp/solr/all-record";
import cppAllRecordsWithCountryJson from "@/swagger/json/cpp/solr/all-record-with-country";
import cppAllRecordsWithRegionJson from "@/swagger/json/cpp/solr/all-record-with-region";
import cppAllRecordsWithSubFiltersJson from "@/swagger/json/cpp/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
