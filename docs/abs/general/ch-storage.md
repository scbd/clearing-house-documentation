<script setup>
import { ref } from "vue";
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerCHStorageJson from "@/swagger/json/general/ch-storage/ch-storage.json";

const swaggerCHStorageSpecs = [
  { json: swaggerCHStorageJson, domId:"ch-storage", protected:true },
];
</script>

# CH Storage

## Overview
This API endpoint allows persisting a temporary file as an attachment to a document. It takes the unique identifier of the document (`uid`) and the temporary file (`guid`) and associates the temporary file as a permanent attachment to the specified document.

---

##### Request
**POST** `/api/v2013/documents/{uid}/attachments/persist-temporary/{guid}`

---

### Headers
<!--@include: @/../components/common/header/authorization.md-->

---

### Playground

<SwaggerUI :swaggerSpecs="swaggerCHStorageSpecs" />
