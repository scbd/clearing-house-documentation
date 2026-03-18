<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import cdiAllRecordsWithQueryJson from "@/swagger/json/cdi/solr/all-record-with-query";
import cdiAllRecordsJson from "@/swagger/json/cdi/solr/all-record";
import cdiAllRecordsWithCountryJson from "@/swagger/json/cdi/solr/all-record-with-country";
import cdiAllRecordsWithRegionJson from "@/swagger/json/cdi/solr/all-record-with-region";
import cdiAllRecordsWithSubFiltersJson from "@/swagger/json/cdi/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()

const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
