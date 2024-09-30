<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import msrAllAbsWithQueryJson from "@/swagger/json/msr/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import msrAllAbsPermitJson from "@/swagger/json/msr/solr/all-record-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import msrAllAbsPermitWithCountryJson from "@/swagger/json/msr/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import msrAllAbsPermitWithRegionJson from "@/swagger/json/msr/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import msrAllAbsPermitWithSubFiltersJson from "@/swagger/json/msr/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, msrAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, msrAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, msrAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, msrAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, msrAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
