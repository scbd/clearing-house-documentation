<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerDeleteJson from "../../swagger/json/general/drafts/delete.json";
import swaggerExistsJson from "../../swagger/json/general/drafts/exists.json";
import swaggerGetInfoJson from "../../swagger/json/general/drafts/get-info.json";
import swaggerGetJson from "../../swagger/json/general/drafts/get.json";
import swaggerListJson from "../../swagger/json/general/drafts/list.json";
import swaggerSaveJson from "../../swagger/json/general/drafts/save.json";

const swaggerDeleteSpecs = [
  { json: swaggerDeleteJson, domId:"delete", protected:true },
];
const swaggerExistsSpecs = [
  { json: swaggerExistsJson, domId:"exists", protected:true },
];
const swaggerGetInfoSpecs = [
  { json: swaggerGetInfoJson, domId:"getInfo", protected:true },
];
const swaggerGetSpecs = [
  { json: swaggerListJson, domId:"get", protected:true },
];
const swaggerListSpecs = [
  { json: swaggerListJson, domId:"list", protected:true },
];
const swaggerSaveSpecs = [
  { json: swaggerSaveJson, domId:"save", protected:true },
];
</script>

# Drafts

<!--@include: ../../components/general/drafts/delete.md-->

<!--@include: ../../components/general/drafts/exists.md-->

<!--@include: ../../components/general/drafts/get-info.md-->

<!--@include: ../../components/general/drafts/get.md-->

<!--@include: ../../components/general/drafts/list.md-->

<!--@include: ../../components/general/drafts/save.md-->