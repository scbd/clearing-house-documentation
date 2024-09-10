<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-abs-permit-with-query.json";
import cpAllAbsWithQueryJson from "@/swagger/json/cp/solr/all-abs-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-abs-permit.json";
import cpAllAbsPermitJson from "@/swagger/json/cp/solr/all-abs-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-abs-with-country.json";
import cpAllAbsPermitWithCountryJson from "@/swagger/json/cp/solr/all-abs-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-abs-with-region.json";
import cpAllAbsPermitWithRegionJson from "@/swagger/json/cp/solr/all-abs-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-abs-with-subfilters.json";
import cpAllAbsPermitWithSubFiltersJson from "@/swagger/json/cp/solr/all-abs-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, cpAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, cpAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, cpAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, cpAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, cpAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
