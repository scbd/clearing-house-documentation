<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerExistsJson from "@/swagger/json/general/document-attachments/exists";
import swaggerThumbnailJson from "@/swagger/json/general/document-attachments/thumbnail";
import swaggerGetJson from "@/swagger/json/general/document-attachments/get";
import swaggerListJson from "@/swagger/json/general/document-attachments/list";
import swaggerCreateJson from "@/swagger/json/general/document-attachments/create";
import swaggerUploadTemporaryStorageJson from "@/swagger/json/general/document-attachments/upload-temporary-storage";
import { useClearingHouse } from "@/utils/composables"

const swaggerExistsSpecs = [
  { json: swaggerExistsJson(useClearingHouse().apiUrl), domId:"exists" },
];
const swaggerThumbnailSpecs = [
  { json: swaggerThumbnailJson(useClearingHouse().apiUrl), domId:"thumbnail" },
];
const swaggerGetSpecs = [
  { json: swaggerGetJson(useClearingHouse().apiUrl), domId:"get" },
];
const swaggerListSpecs = [
  { json: swaggerListJson(useClearingHouse().apiUrl), domId:"list", protected: true },
];
const swaggerCreateSpecs = [
  { json: swaggerCreateJson(useClearingHouse().apiUrl), domId:"create", protected: true },
];

const swaggerUploadTemporaryStorageSpecs = [
  { json: swaggerUploadTemporaryStorageJson(useClearingHouse().apiUrl), domId:"ch-storage", protected:true },
];
</script>

# Documents Attachments

<!--@include: @/../components/general/documents-attachments/exists.md-->

<!--@include: @/../components/general/documents-attachments/thumbnail.md-->

<!--@include: @/../components/general/documents-attachments/get.md-->

<!--@include: @/../components/general/documents-attachments/list.md-->

<!--@include: @/../components/general/documents-attachments/create.md-->

<!--@include: @/../components/general/documents-attachments/upload-temporary-storage.md-->
