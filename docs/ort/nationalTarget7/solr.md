<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nationalTargetAllRecordsWithQueryJson from "@/swagger/json/nationalTarget/solr/all-record-with-query.json";
import nationalTargetAllRecordsJson from "@/swagger/json/nationalTarget/solr/all-record.json";
import nationalTargetAllRecordsWithCountryJson from "@/swagger/json/nationalTarget/solr/all-record-with-country.json";
import nationalTargetAllRecordsWithRegionJson from "@/swagger/json/nationalTarget/solr/all-record-with-region.json";
import nationalTargetAllRecordsWithSubFiltersJson from "@/swagger/json/nationalTarget/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
