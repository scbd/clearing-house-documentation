<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import geneAllAbsWithQueryJson from "@/swagger/json/gene/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import geneAllAbsPermitJson from "@/swagger/json/gene/solr/all-record-permit.json";

import baseAllAbsPermitWithCountryJson from "@/swagger/json/records/solr/all-record-with-country.json";
import geneAllAbsPermitWithCountryJson from "@/swagger/json/gene/solr/all-record-with-country.json";

import baseAllAbsPermitWithRegionJson from "@/swagger/json/records/solr/all-record-with-region.json";
import geneAllAbsPermitWithRegionJson from "@/swagger/json/gene/solr/all-record-with-region.json";

import baseAllAbsPermitWithSubFiltersJson from "@/swagger/json/records/solr/all-record-with-subfilters.json";
import geneAllAbsPermitWithSubFiltersJson from "@/swagger/json/gene/solr/all-record-with-subfilters.json";

function mergeJson(base, specific) {
  const merged = JSON.parse(JSON.stringify(base));
  merged.paths["/index"].get.parameters[0].schema.example = specific.example;
  return merged;
}


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, geneAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, geneAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, geneAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, geneAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, geneAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
