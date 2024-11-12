<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue";

import ndbAllRecordsWithQueryJson from "@/swagger/json/ndb/solr/all-record-with-query.json";
import ndbAllRecordsJson from "@/swagger/json/ndb/solr/all-record.json";
import ndbAllRecordsWithCountryJson from "@/swagger/json/ndb/solr/all-record-with-country.json";
import ndbAllRecordsWithRegionJson from "@/swagger/json/ndb/solr/all-record-with-region.json";
import ndbAllRecordsWithSubFiltersJson from "@/swagger/json/ndb/solr/all-record-with-subfilters.json";

import baseJson from "@/swagger/json/records/solr/base.json";

import { mergeSwaggerWithBase, deepClone } from "@/utils"

const swaggerSpecs = [
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithCountryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithQueryJson, ['paths']) ,protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithRegionJson, ['paths']), protected: false },
  { json: mergeSwaggerWithBase(deepClone(baseJson), ndbAllRecordsWithSubFiltersJson, ["paths"]), protected: false },
];

</script>

<!--@include: @/../components/records/solr.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
