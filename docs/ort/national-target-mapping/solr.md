<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import nationalTargetMappingAllRecordsWithQueryJson from "@/swagger/json/nationalTargetMapping/solr/all-record-with-query.json";
import nationalTargetMappingAllRecordsJson from "@/swagger/json/nationalTargetMapping/solr/all-record.json";
import nationalTargetMappingAllRecordsWithCountryJson from "@/swagger/json/nationalTargetMapping/solr/all-record-with-country.json";
import nationalTargetMappingAllRecordsWithRegionJson from "@/swagger/json/nationalTargetMapping/solr/all-record-with-region.json";
import nationalTargetMappingAllRecordsWithSubFiltersJson from "@/swagger/json/nationalTargetMapping/solr/all-record-with-subfilters.json";

import swaggerJson from "@/swagger/json/records/solr/base";
import { useClearingHouse } from "@/utils/composables"

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const baseJson = swaggerJson(useClearingHouse().apiUrl)

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetMappingAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetMappingAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetMappingAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetMappingAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), nationalTargetMappingAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
