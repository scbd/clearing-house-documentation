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


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, irccAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, irccAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, irccAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, irccAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, irccAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
