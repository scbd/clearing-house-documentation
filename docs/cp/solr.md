<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import cpAllAbsWithQueryJson from "@/swagger/json/cp/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import cpAllAbsPermitJson from "@/swagger/json/cp/solr/all-record-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import cpAllAbsPermitWithCountryJson from "@/swagger/json/cp/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import cpAllAbsPermitWithRegionJson from "@/swagger/json/cp/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import cpAllAbsPermitWithSubFiltersJson from "@/swagger/json/cp/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cpAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
