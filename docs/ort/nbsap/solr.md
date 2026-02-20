<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nbsapAllRecordsWithQueryJson from "@/swagger/json/nbsap/solr/all-record-with-query.json";
import nbsapAllRecordsJson from "@/swagger/json/nbsap/solr/all-record.json";
import nbsapAllRecordsWithCountryJson from "@/swagger/json/nbsap/solr/all-record-with-country.json";
import nbsapAllRecordsWithRegionJson from "@/swagger/json/nbsap/solr/all-record-with-region.json";
import nbsapAllRecordsWithSubFiltersJson from "@/swagger/json/nbsap/solr/all-record-with-subfilters.json";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const baseJson = swaggerJson(useClearingHouse().apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nbsapAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
