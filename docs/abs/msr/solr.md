<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import msrAllRecordsWithQueryJson from "@/swagger/json/msr/solr/all-record-with-query";
import msrAllRecordsJson from "@/swagger/json/msr/solr/all-record";
import msrAllRecordsWithCountryJson from "@/swagger/json/msr/solr/all-record-with-country";
import msrAllRecordsWithRegionJson from "@/swagger/json/msr/solr/all-record-with-region";
import msrAllRecordsWithSubFiltersJson from "@/swagger/json/msr/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
