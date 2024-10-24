<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerExistsJson from "@/swagger/json/general/document-versions/exists.json";
import swaggerGetInfoJson from "@/swagger/json/general/document-versions/get-info.json";
import swaggerGetJson from "@/swagger/json/general/document-versions/get.json";
import swaggerListJson from "@/swagger/json/general/document-versions/list.json";

const swaggerExistsSpecs = [
  { json: swaggerExistsJson, domId:"exists" },
];
const swaggerGetInfoSpecs = [
  { json: swaggerGetInfoJson, domId:"getInfo" },
];
const swaggerGetSpecs = [
  { json: swaggerGetJson, domId:"get" },
];
const swaggerListSpecs = [
  { json: swaggerListJson, domId:"list" },
];
</script>

# Document Versions

<!--@include: @/../components/general/document-versions/exists.md-->

<!--@include: @/../components/general/document-versions/get-info.md-->

<!--@include: @/../components/general/document-versions/get.md-->

<!--@include: @/../components/general/document-versions/list.md-->
