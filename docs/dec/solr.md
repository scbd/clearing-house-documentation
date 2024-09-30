<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import decAllAbsWithQueryJson from "@/swagger/json/dec/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import decAllAbsPermitJson from "@/swagger/json/dec/solr/all-record-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import decAllAbsPermitWithCountryJson from "@/swagger/json/dec/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import decAllAbsPermitWithRegionJson from "@/swagger/json/dec/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import decAllAbsPermitWithSubFiltersJson from "@/swagger/json/dec/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), decAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
