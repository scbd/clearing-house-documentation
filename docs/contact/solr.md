<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import baseAllAbsWithQueryJson from "@/swagger/json/records/solr/all-record-permit-with-query.json";
import contactAllAbsWithQueryJson from "@/swagger/json/contact/solr/all-record-permit-with-query.json";

import baseAllAbsPermitJson from "@/swagger/json/records/solr/all-record-permit.json";
import contactAllAbsPermitJson from "@/swagger/json/contact/solr/all-record-permit.json";

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


const swaggerSpecs = [
  { json:mergeJson(baseAllAbsWithQueryJson, contactAllAbsWithQueryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitJson, contactAllAbsPermitJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithCountryJson, contactAllAbsPermitWithCountryJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithRegionJson, contactAllAbsPermitWithRegionJson), protected: false },
  { json: mergeJson(baseAllAbsPermitWithSubFiltersJson, contactAllAbsPermitWithSubFiltersJson), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
