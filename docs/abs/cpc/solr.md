<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cpcAllRecordsWithQueryJson from "@/swagger/json/cpc/solr/all-record-with-query";
import cpcAllRecordsJson from "@/swagger/json/cpc/solr/all-record";
import cpcAllRecordsWithCountryJson from "@/swagger/json/cpc/solr/all-record-with-country";
import cpcAllRecordsWithRegionJson from "@/swagger/json/cpc/solr/all-record-with-region";
import cpcAllRecordsWithSubFiltersJson from "@/swagger/json/cpc/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpcAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
