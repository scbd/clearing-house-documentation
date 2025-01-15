<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerExistsJson from "@/swagger/json/general/document-attachments/exists.json";
import swaggerThumbnailJson from "@/swagger/json/general/document-attachments/thumbnail.json";
import swaggerGetJson from "@/swagger/json/general/document-attachments/get.json";
import swaggerListJson from "@/swagger/json/general/document-attachments/list.json";
import swaggerCreateJson from "@/swagger/json/general/document-attachments/create.json";
import swaggerUploadTemporaryStorageJson from "@/swagger/json/general/document-attachments/upload-temporary-storage.json";

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
const swaggerCreateSpecs = [
  { json: swaggerCreateJson, domId:"create", protected: true },
];

const swaggerUploadTemporaryStorageSpecs = [
  { json: swaggerUploadTemporaryStorageJson, domId:"ch-storage", protected:true },
];
</script>

# Documents Attachments

<!--@include: @/../components/general/documents-attachments/exists.md-->

<!--@include: @/../components/general/documents-attachments/thumbnail.md-->

<!--@include: @/../components/general/documents-attachments/get.md-->

<!--@include: @/../components/general/documents-attachments/list.md-->

<!--@include: @/../components/general/documents-attachments/create.md-->

<!--@include: @/../components/general/documents-attachments/upload-temporary-storage.md-->