<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nationalReportBinaryIndicatorDataAllRecordsWithQueryJson from "@/swagger/json/nationalReportBinaryIndicatorData/solr/all-record-with-query.json";
import nationalReportBinaryIndicatorDataAllRecordsJson from "@/swagger/json/nationalReportBinaryIndicatorData/solr/all-record.json";
import nationalReportBinaryIndicatorDataAllRecordsWithCountryJson from "@/swagger/json/nationalReportBinaryIndicatorData/solr/all-record-with-country.json";
import nationalReportBinaryIndicatorDataAllRecordsWithRegionJson from "@/swagger/json/nationalReportBinaryIndicatorData/solr/all-record-with-region.json";
import nationalReportBinaryIndicatorDataAllRecordsWithSubFiltersJson from "@/swagger/json/nationalReportBinaryIndicatorData/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportBinaryIndicatorDataAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportBinaryIndicatorDataAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportBinaryIndicatorDataAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportBinaryIndicatorDataAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalReportBinaryIndicatorDataAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
