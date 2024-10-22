<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import decAllRecordsWithQueryJson from "@/swagger/json/dec/solr/all-record-with-query.json";
import decAllRecordsJson from "@/swagger/json/dec/solr/all-record.json";
import decAllRecordsWithCountryJson from "@/swagger/json/dec/solr/all-record-with-country.json";
import decAllRecordsWithRegionJson from "@/swagger/json/dec/solr/all-record-with-region.json";
import decAllRecordsWithSubFiltersJson from "@/swagger/json/dec/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
