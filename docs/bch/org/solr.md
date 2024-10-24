<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseJson from "@/swagger/json/records/solr/base.json";

import orgAllRecordsWithQueryJson from "@/swagger/json/org/solr/all-record-with-query.json";
import orgAllRecordsJson from "@/swagger/json/org/solr/all-record.json";
import orgAllRecordsWithCountryJson from "@/swagger/json/org/solr/all-record-with-country.json";
import orgAllRecordsWithRegionJson from "@/swagger/json/org/solr/all-record-with-region.json";
import orgAllRecordsWithSubFiltersJson from "@/swagger/json/org/solr/all-record-with-subfilters.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), orgAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
