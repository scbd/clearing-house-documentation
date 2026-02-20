<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import msrAllRecordsWithQueryJson from "@/swagger/json/msr/solr/all-record-with-query.json";
import msrAllRecordsJson from "@/swagger/json/msr/solr/all-record.json";
import msrAllRecordsWithCountryJson from "@/swagger/json/msr/solr/all-record-with-country.json";
import msrAllRecordsWithRegionJson from "@/swagger/json/msr/solr/all-record-with-region.json";
import msrAllRecordsWithSubFiltersJson from "@/swagger/json/msr/solr/all-record-with-subfilters.json";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const baseJson = swaggerJson(useClearingHouse().apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), msrAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
