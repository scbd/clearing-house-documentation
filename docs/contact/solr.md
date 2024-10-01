<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-with-query.json";
import contactAllAbsWithQueryJson from "@/swagger/json/contact/solr/all-record-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record.json";
import contactAllAbsPermitJson from "@/swagger/json/contact/solr/all-record.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import contactAllAbsPermitWithCountryJson from "@/swagger/json/contact/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import contactAllAbsPermitWithRegionJson from "@/swagger/json/contact/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import contactAllAbsPermitWithSubFiltersJson from "@/swagger/json/contact/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), contactAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];
</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
