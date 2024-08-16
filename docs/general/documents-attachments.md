<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerExistsJson from "../../swagger/json/general/document-attachments/exists.json";
import swaggerThumbnailJson from "../../swagger/json/general/document-attachments/thumbnail.json";
import swaggerGetJson from "../../swagger/json/general/document-attachments/get.json";
import swaggerListJson from "../../swagger/json/general/document-attachments/list.json";
import swaggerUpdateJson from "../../swagger/json/general/document-attachments/update.json";

const swaggerExistsSpecs = [
  { json: swaggerExistsJson, domId:"exists" },
];
const swaggerThumbnailSpecs = [
  { json: swaggerThumbnailJson, domId:"thumbnail" },
];
const swaggerGetSpecs = [
  { json: swaggerGetJson, domId:"get" },
];
const swaggerListSpecs = [
  { json: swaggerListJson, domId:"list", protected: true },
];
const swaggerUpdateSpecs = [
  { json: swaggerUpdateJson, domId:"update", protected: true },
];
</script>

# Documents Attachments

<!--@include: ../../components/general/documents-attachments/exists.md-->

<!--@include: ../../components/general/documents-attachments/thumbnail.md-->

<!--@include: ../../components/general/documents-attachments/get.md-->

<!--@include: ../../components/general/documents-attachments/list.md-->

<!--@include: ../../components/general/documents-attachments/update.md-->
