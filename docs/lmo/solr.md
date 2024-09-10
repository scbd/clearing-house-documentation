<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-abs-permit-with-query.json";
import lmoAllAbsWithQueryJson from "@/swagger/json/lmo/solr/all-abs-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-abs-permit.json";
import lmoAllAbsPermitJson from "@/swagger/json/lmo/solr/all-abs-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-abs-with-country.json";
import lmoAllAbsPermitWithCountryJson from "@/swagger/json/lmo/solr/all-abs-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-abs-with-region.json";
import lmoAllAbsPermitWithRegionJson from "@/swagger/json/lmo/solr/all-abs-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-abs-with-subfilters.json";
import lmoAllAbsPermitWithSubFiltersJson from "@/swagger/json/lmo/solr/all-abs-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, lmoAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, lmoAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, lmoAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, lmoAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, lmoAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
