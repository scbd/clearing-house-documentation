<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cppAllRecordsWithQueryJson from "@/swagger/json/cpp/solr/all-record-with-query.json";
import cppAllRecordsJson from "@/swagger/json/cpp/solr/all-record.json";
import cppAllRecordsWithCountryJson from "@/swagger/json/cpp/solr/all-record-with-country.json";
import cppAllRecordsWithRegionJson from "@/swagger/json/cpp/solr/all-record-with-region.json";
import cppAllRecordsWithSubFiltersJson from "@/swagger/json/cpp/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cppAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
