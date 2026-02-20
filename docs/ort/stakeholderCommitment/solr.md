<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import scAllRecordsWithQueryJson from "@/swagger/json/stakeholderCommitment/solr/all-record-with-query.json";
import scAllRecordsJson from "@/swagger/json/stakeholderCommitment/solr/all-record.json";

import scAllRecordsWithSubFiltersJson from "@/swagger/json/stakeholderCommitment/solr/all-record-with-subfilters.json";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const baseJson = swaggerJson(useClearingHouse().apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), scAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), scAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), scAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
