<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import iraAllAbsWithQueryJson from "@/swagger/json/ira/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import iraAllAbsPermitJson from "@/swagger/json/ira/solr/all-record-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import iraAllAbsPermitWithCountryJson from "@/swagger/json/ira/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import iraAllAbsPermitWithRegionJson from "@/swagger/json/ira/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import iraAllAbsPermitWithSubFiltersJson from "@/swagger/json/ira/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), iraAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
