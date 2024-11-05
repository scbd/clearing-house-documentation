<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import vlrAllRecordsWithQueryJson from "@/swagger/json/vlr/solr/all-record-with-query.json";
import vlrAllRecordsJson from "@/swagger/json/vlr/solr/all-record.json";
import vlrAllRecordsWithCountryJson from "@/swagger/json/vlr/solr/all-record-with-country.json";
import vlrAllRecordsWithRegionJson from "@/swagger/json/vlr/solr/all-record-with-region.json";
import vlrAllRecordsWithSubFiltersJson from "@/swagger/json/vlr/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), vlrAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
