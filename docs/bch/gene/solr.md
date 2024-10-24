<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import geneAllRecordsWithQueryJson from "@/swagger/json/gene/solr/all-record-with-query.json";
import geneAllRecordsJson from "@/swagger/json/gene/solr/all-record.json";
import geneAllRecordsWithCountryJson from "@/swagger/json/gene/solr/all-record-with-country.json";
import geneAllRecordsWithRegionJson from "@/swagger/json/gene/solr/all-record-with-region.json";
import geneAllRecordsWithSubFiltersJson from "@/swagger/json/gene/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), geneAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
