<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import irccAllRecordsWithQueryJson from "@/swagger/json/ircc/solr/all-record-with-query.json";
import irccAllRecordsJson from "@/swagger/json/ircc/solr/all-record.json";
import irccAllRecordsWithCountryJson from "@/swagger/json/ircc/solr/all-record-with-country.json";
import irccAllRecordsWithRegionJson from "@/swagger/json/ircc/solr/all-record-with-region.json";
import irccAllRecordsWithSubFiltersJson from "@/swagger/json/ircc/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
