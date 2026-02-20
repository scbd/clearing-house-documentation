<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cnaAllRecordsWithQueryJson from "@/swagger/json/cna/solr/all-record-with-query.json";
import cnaAllRecordsJson from "@/swagger/json/cna/solr/all-record.json";
import cnaAllRecordsWithCountryJson from "@/swagger/json/cna/solr/all-record-with-country.json";
import cnaAllRecordsWithRegionJson from "@/swagger/json/cna/solr/all-record-with-region.json";
import cnaAllRecordsWithSubFiltersJson from "@/swagger/json/cna/solr/all-record-with-subfilters.json";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const baseJson = swaggerJson(useClearingHouse().apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
