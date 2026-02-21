<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerDeleteJson from "@/swagger/json/general/drafts/delete";
import swaggerExistsJson from "@/swagger/json/general/drafts/exists";
import swaggerGetInfoJson from "@/swagger/json/general/drafts/get-info";
import swaggerGetJson from "@/swagger/json/general/drafts/get";
import swaggerListJson from "@/swagger/json/general/drafts/list";
import swaggerSaveJson from "@/swagger/json/general/drafts/save";
import { useClearingHouse } from "@/utils/composables"

const swaggerDeleteSpecs = [
  { json: swaggerDeleteJson(useClearingHouse().apiUrl), domId:"delete", protected:true },
];
const swaggerExistsSpecs = [
  { json: swaggerExistsJson(useClearingHouse().apiUrl), domId:"exists", protected:true },
];
const swaggerGetInfoSpecs = [
  { json: swaggerGetInfoJson(useClearingHouse().apiUrl), domId:"getInfo", protected:true },
];
const swaggerGetSpecs = [
  { json: swaggerGetJson(useClearingHouse().apiUrl), domId:"get", protected:true },
];
const swaggerListSpecs = [
  { json: swaggerListJson(useClearingHouse().apiUrl), domId:"list", protected:true },
];
const swaggerSaveSpecs = [
  { json: swaggerSaveJson(useClearingHouse().apiUrl), domId:"save", protected:true },
];
</script>

# Drafts

<!--@include: @/../components/general/drafts/delete.md-->

<!--@include: @/../components/general/drafts/exists.md-->

<!--@include: @/../components/general/drafts/get-info.md-->

<!--@include: @/../components/general/drafts/get.md-->

<!--@include: @/../components/general/drafts/list.md-->

<!--@include: @/../components/general/drafts/save.md-->
