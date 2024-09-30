<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import nfpAllAbsWithQueryJson from "@/swagger/json/nfp/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import nfpAllAbsPermitJson from "@/swagger/json/nfp/solr/all-record-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import nfpAllAbsPermitWithCountryJson from "@/swagger/json/nfp/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import nfpAllAbsPermitWithRegionJson from "@/swagger/json/nfp/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import nfpAllAbsPermitWithSubFiltersJson from "@/swagger/json/nfp/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, nfpAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, nfpAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, nfpAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, nfpAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, nfpAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
