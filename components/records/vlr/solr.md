<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import vlrAllRecordsWithQueryJson from "@/swagger/json/vlr/solr/all-record-with-query";
import vlrAllRecordsJson from "@/swagger/json/vlr/solr/all-record";
import vlrAllRecordsWithCountryJson from "@/swagger/json/vlr/solr/all-record-with-country";
import vlrAllRecordsWithRegionJson from "@/swagger/json/vlr/solr/all-record-with-region";
import vlrAllRecordsWithSubFiltersJson from "@/swagger/json/vlr/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
