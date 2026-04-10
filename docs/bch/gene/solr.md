<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import geneAllRecordsWithQueryJson from "@/swagger/json/gene/solr/all-record-with-query";
import geneAllRecordsJson from "@/swagger/json/gene/solr/all-record";
import geneAllRecordsWithCountryJson from "@/swagger/json/gene/solr/all-record-with-country";
import geneAllRecordsWithRegionJson from "@/swagger/json/gene/solr/all-record-with-region";
import geneAllRecordsWithSubFiltersJson from "@/swagger/json/gene/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
