<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import lmoAllRecordsWithQueryJson from "@/swagger/json/lmo/solr/all-record-with-query.json";
import lmoAllRecordsJson from "@/swagger/json/lmo/solr/all-record.json";
import lmoAllRecordsWithCountryJson from "@/swagger/json/lmo/solr/all-record-with-country.json";
import lmoAllRecordsWithRegionJson from "@/swagger/json/lmo/solr/all-record-with-region.json";
import lmoAllRecordsWithSubFiltersJson from "@/swagger/json/lmo/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lmoAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
