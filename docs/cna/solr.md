<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import cnaAllAbsWithQueryJson from "@/swagger/json/cna/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import cnaAllAbsPermitJson from "@/swagger/json/cna/solr/all-record-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import cnaAllAbsPermitWithCountryJson from "@/swagger/json/cna/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import cnaAllAbsPermitWithRegionJson from "@/swagger/json/cna/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import cnaAllAbsPermitWithSubFiltersJson from "@/swagger/json/cna/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cnaAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
