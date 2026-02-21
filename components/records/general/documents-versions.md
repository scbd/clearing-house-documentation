<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerExistsJson from "@/swagger/json/general/document-versions/exists";
import swaggerGetInfoJson from "@/swagger/json/general/document-versions/get-info";
import swaggerGetJson from "@/swagger/json/general/document-versions/get";
import swaggerListJson from "@/swagger/json/general/document-versions/list";
import { useClearingHouse } from "@/utils/composables"
console.log('useClearingHouse().apiUrl', useClearingHouse().apiUrl)

const swaggerExistsSpecs = [
  { json: swaggerExistsJson(useClearingHouse().apiUrl), domId:"exists" },
];
const swaggerGetInfoSpecs = [
  { json: swaggerGetInfoJson(useClearingHouse().apiUrl), domId:"getInfo" },
];
const swaggerGetSpecs = [
  { json: swaggerGetJson(useClearingHouse().apiUrl), domId:"get" },
];
const swaggerListSpecs = [
  { json: swaggerListJson(useClearingHouse().apiUrl), domId:"list" },
];
</script>

# Document Versions

<!--@include: @/../components/general/document-versions/exists.md-->

<!--@include: @/../components/general/document-versions/get-info.md-->

<!--@include: @/../components/general/document-versions/get.md-->

<!--@include: @/../components/general/document-versions/list.md-->
