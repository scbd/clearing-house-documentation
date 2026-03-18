<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import contactAllRecordsWithQueryJson from "@/swagger/json/contact/solr/all-record-with-query";
import contactAllRecordsJson from "@/swagger/json/contact/solr/all-record";
import contactAllRecordsWithCountryJson from "@/swagger/json/contact/solr/all-record-with-country";
import contactAllRecordsWithRegionJson from "@/swagger/json/contact/solr/all-record-with-region";
import contactAllRecordsWithSubFiltersJson from "@/swagger/json/contact/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];
</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
