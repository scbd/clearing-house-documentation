<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import ndbAllRecordsWithQueryJson from "@/swagger/json/ndb/solr/all-record-with-query";
import ndbAllRecordsJson from "@/swagger/json/ndb/solr/all-record";
import ndbAllRecordsWithCountryJson from "@/swagger/json/ndb/solr/all-record-with-country";
import ndbAllRecordsWithRegionJson from "@/swagger/json/ndb/solr/all-record-with-region";
import ndbAllRecordsWithSubFiltersJson from "@/swagger/json/ndb/solr/all-record-with-subfilters";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const clearinghouse = useClearingHouse()
const baseJson = swaggerJson(clearinghouse.apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithCountryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithQueryJson(clearinghouse), ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithRegionJson(clearinghouse), ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithSubFiltersJson(clearinghouse), ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
