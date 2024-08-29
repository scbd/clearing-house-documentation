<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-abs-permit-with-query.json";
import cnaAllAbsWithQueryJson from "@/swagger/json/cna/solr/all-abs-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-abs-permit.json";
import cnaAllAbsPermitJson from "@/swagger/json/cna/solr/all-abs-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-abs-with-country.json";
import cnaAllAbsPermitWithCountryJson from "@/swagger/json/cna/solr/all-abs-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-abs-with-region.json";
import cnaAllAbsPermitWithRegionJson from "@/swagger/json/cna/solr/all-abs-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-abs-with-subfilters.json";
import cnaAllAbsPermitWithSubFiltersJson from "@/swagger/json/cna/solr/all-abs-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, cnaAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, cnaAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, cnaAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, cnaAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, cnaAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
