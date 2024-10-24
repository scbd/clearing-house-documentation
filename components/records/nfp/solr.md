<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nfpAllRecordsWithQueryJson from "@/swagger/json/nfp/solr/all-record-with-query.json";
import nfpAllRecordsJson from "@/swagger/json/nfp/solr/all-record.json";
import nfpAllRecordsWithCountryJson from "@/swagger/json/nfp/solr/all-record-with-country.json";
import nfpAllRecordsWithRegionJson from "@/swagger/json/nfp/solr/all-record-with-region.json";
import nfpAllRecordsWithSubFiltersJson from "@/swagger/json/nfp/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nfpAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nfpAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nfpAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nfpAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nfpAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
