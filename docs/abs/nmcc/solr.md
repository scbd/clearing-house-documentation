<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nmccAllRecordsWithQueryJson from "@/swagger/json/nmcc/solr/all-record-with-query.json";
import nmccAllRecordsJson from "@/swagger/json/nmcc/solr/all-record.json";
import nmccAllRecordsWithCountryJson from "@/swagger/json/nmcc/solr/all-record-with-country.json";
import nmccAllRecordsWithRegionJson from "@/swagger/json/nmcc/solr/all-record-with-region.json";
import nmccAllRecordsWithSubFiltersJson from "@/swagger/json/nmcc/solr/all-record-with-subfilters.json";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const baseJson = swaggerJson(useClearingHouse().apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nmccAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
