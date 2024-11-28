<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nationalReportIndicatorDataAllRecordsWithQueryJson from "@/swagger/json/nationalReportIndicatorData/solr/all-record-with-query.json";
import nationalReportIndicatorDataAllRecordsJson from "@/swagger/json/nationalReportIndicatorData/solr/all-record.json";
import nationalReportIndicatorDataAllRecordsWithCountryJson from "@/swagger/json/nationalReportIndicatorData/solr/all-record-with-country.json";
import nationalReportIndicatorDataAllRecordsWithRegionJson from "@/swagger/json/nationalReportIndicatorData/solr/all-record-with-region.json";
import nationalReportIndicatorDataAllRecordsWithSubFiltersJson from "@/swagger/json/nationalReportIndicatorData/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportIndicatorDataAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportIndicatorDataAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportIndicatorDataAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportIndicatorDataAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportIndicatorDataAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
