<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import cdiAllRecordsWithQueryJson from "@/swagger/json/cdi/solr/all-record-with-query.json";
import cdiAllRecordsJson from "@/swagger/json/cdi/solr/all-record.json";
import cdiAllRecordsWithCountryJson from "@/swagger/json/cdi/solr/all-record-with-country.json";
import cdiAllRecordsWithRegionJson from "@/swagger/json/cdi/solr/all-record-with-region.json";
import cdiAllRecordsWithSubFiltersJson from "@/swagger/json/cdi/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), cdiAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
