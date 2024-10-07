<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"

import contactAllRecordsWithQueryJson from "@/swagger/json/contact/solr/all-record-with-query.json";
import contactAllRecordsJson from "@/swagger/json/contact/solr/all-record.json";
import contactAllRecordsWithCountryJson from "@/swagger/json/contact/solr/all-record-with-country.json";
import contactAllRecordsWithRegionJson from "@/swagger/json/contact/solr/all-record-with-region.json";
import contactAllRecordsWithSubFiltersJson from "@/swagger/json/contact/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

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
