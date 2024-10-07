<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cpAllRecordsWithQueryJson from "@/swagger/json/cp/solr/all-record-with-query.json";
import cpAllRecordsJson from "@/swagger/json/cp/solr/all-record.json";
import cpAllRecordsWithCountryJson from "@/swagger/json/cp/solr/all-record-with-country.json";
import cpAllRecordsWithRegionJson from "@/swagger/json/cp/solr/all-record-with-region.json";
import cpAllRecordsWithSubFiltersJson from "@/swagger/json/cp/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
