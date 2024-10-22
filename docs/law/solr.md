<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import lawAllRecordsWithQueryJson from "@/swagger/json/law/solr/all-record-with-query.json";
import lawAllRecordsJson from "@/swagger/json/law/solr/all-record.json";
import lawAllRecordsWithCountryJson from "@/swagger/json/law/solr/all-record-with-country.json";
import lawAllRecordsWithRegionJson from "@/swagger/json/law/solr/all-record-with-region.json";
import lawAllRecordsWithSubFiltersJson from "@/swagger/json/law/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), lawAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
