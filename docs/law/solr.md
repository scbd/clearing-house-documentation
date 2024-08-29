<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-abs-permit-with-query.json";
import lawAllAbsWithQueryJson from "@/swagger/json/law/solr/all-abs-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-abs-permit.json";
import lawAllAbsPermitJson from "@/swagger/json/law/solr/all-abs-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-abs-with-country.json";
import lawAllAbsPermitWithCountryJson from "@/swagger/json/law/solr/all-abs-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-abs-with-region.json";
import lawAllAbsPermitWithRegionJson from "@/swagger/json/law/solr/all-abs-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-abs-with-subfilters.json";
import lawAllAbsPermitWithSubFiltersJson from "@/swagger/json/law/solr/all-abs-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, lawAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, lawAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, lawAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, lawAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, lawAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
