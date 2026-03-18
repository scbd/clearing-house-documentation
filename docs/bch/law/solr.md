<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import lawAllRecordsWithQueryJson from "@/swagger/json/law/solr/all-record-with-query";
import lawAllRecordsJson from "@/swagger/json/law/solr/all-record";
import lawAllRecordsWithCountryJson from "@/swagger/json/law/solr/all-record-with-country";
import lawAllRecordsWithRegionJson from "@/swagger/json/law/solr/all-record-with-region";
import lawAllRecordsWithSubFiltersJson from "@/swagger/json/law/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
