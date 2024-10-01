<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-with-query.json";
import irccAllAbsWithQueryJson from "@/swagger/json/ircc/solr/all-record-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record.json";
import irccAllAbsPermitJson from "@/swagger/json/ircc/solr/all-record.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import irccAllAbsPermitWithCountryJson from "@/swagger/json/ircc/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import irccAllAbsPermitWithRegionJson from "@/swagger/json/ircc/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import irccAllAbsPermitWithSubFiltersJson from "@/swagger/json/ircc/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), irccAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];


</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
