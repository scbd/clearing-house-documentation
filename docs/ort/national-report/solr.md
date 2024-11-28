<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nationalReportAllRecordsWithQueryJson from "@/swagger/json/nationalReport/solr/all-record-with-query.json";
import nationalReportAllRecordsJson from "@/swagger/json/nationalReport/solr/all-record.json";
import nationalReportAllRecordsWithCountryJson from "@/swagger/json/nationalReport/solr/all-record-with-country.json";
import nationalReportAllRecordsWithRegionJson from "@/swagger/json/nationalReport/solr/all-record-with-region.json";
import nationalReportAllRecordsWithSubFiltersJson from "@/swagger/json/nationalReport/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
