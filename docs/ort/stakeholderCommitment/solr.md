<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import scAllRecordsWithQueryJson from "@/swagger/json/stakeholderCommitment/solr/all-record-with-query";
import scAllRecordsJson from "@/swagger/json/stakeholderCommitment/solr/all-record";

import scAllRecordsWithSubFiltersJson from "@/swagger/json/stakeholderCommitment/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), scAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), scAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), scAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
