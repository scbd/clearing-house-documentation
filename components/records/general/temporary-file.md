<script setup>
import { ref } from "vue";
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerSlotCreationJson from "@/swagger/json/general/file-upload/without-limit/slot-creation.json";
import swaggerUploadFileJson from "@/swagger/json/general/file-upload/without-limit/upload-file.json";
import swaggerGetFileJson from "@/swagger/json/general/file-upload/without-limit/get-file.json";
import swaggerGetFileWithLimitJson from "@/swagger/json/general/file-upload/with-limit/get-file.json";

const swaggerSlotCreationSpecs = [
  { json: swaggerSlotCreationJson, domId:"slot-creation", protected:true },
];

const swaggerUploadFileSpecs = ref([
  { json: { ...swaggerUploadFileJson }, domId: "upload-file", protected: false },
]);

const swaggerGetFileSpecs = [
  { json: swaggerGetFileJson, domId:"get-file", protected:true },
];

const swaggerGetFileWithLimitSpecs = [
  { json: swaggerGetFileWithLimitJson, domId:"get-file-with-limit", protected:true },
];
</script>

# Temporary File

## Overview

This API is used to upload files to a intermediate location for furture uses in other CBD's system.

## Upload File - Unlimited Size

This method is used for uploading files of unlimited size through a three-step process:

1. **Create a Slot**
2. **Upload the File to the Slot**
3. **Retrieve the File Details**

### Step 1: Create a Slot

<br>

##### Request

**POST** `https://api.cbddev.xyz/api/v2015/temporary-files`

---

##### Headers

| Field         | Type   | Description                  |
| ------------- | ------ | ---------------------------- |
| Authorization | String | Required authorization token |

---

##### Body

| Name     | Type   |
| -------- | ------ |
| filename | String |

##### Response Body

| Name        | Type   |
| ----------- | ------ |
| url         | String |
| uid         | String |
| contentType | String |
| metadata    | Object |

##### Response Example

```json
{
  "url": "https://s3.amazonaws.com/cbd.documents.temporary/1cfb1381f08ddb32071af684b5dc9d16?Expires=1734738728&Signature=...",
  "uid": "1cfb1381f08ddb32071af684b5dc9d16",
  "contentType": "application/pdf",
  "metadata": {
    "filename": "5_KB_file.pdf",
    "content-type": "application/pdf",
    "user": "301785"
  }
}
```

### Playground

<SwaggerUI :swaggerSpecs="swaggerSlotCreationSpecs" />

### Step 2: Upload File to Slot

<br>

##### Request

**PUT** `Response URL from Step 1`

---

##### Headers

| Field        | Type   | Description                          |
| ------------ | ------ | ------------------------------------ |
| Content-Type | String | Content type of the file (mime-type) |

---

##### Body

Upload the file as binary data

### Playground

<SwaggerUI :swaggerSpecs="swaggerUploadFileSpecs" />

### Step 3: Retrieve File Details

<br>

##### Request

**GET** `https://api.cbddev.xyz/api/v2015/temporary-files/{uid}`

---

##### URL Parameters

| Field | Type   | Description                |
| ----- | ------ | -------------------------- |
| uid   | String | Unique identifier for file |

##### Headers

| Field         | Type   | Description                  |
| ------------- | ------ | ---------------------------- |
| Authorization | String | Required authorization token |

##### Response Body

| Name        | Type   |
| ----------- | ------ |
| url         | String |
| uid         | String |
| hash        | String |
| filename    | String |
| size        | Number |
| contentType | String |
| metadata    | Object |

##### Response Example

```json
{
  "url": null,
  "uid": "1cfb1381f08ddb32071af684b5dc9d16",
  "hash": "0071b125fc59b2b39651854beddbe275",
  "filename": "5_KB_file.pdf",
  "size": 5120,
  "contentType": "application/pdf",
  "metadata": {
    "filename": "5_KB_file.pdf",
    "user": "301785",
    "content-type": "application/pdf"
  }
}
```

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetFileSpecs" />

## Upload File - Limited Size

This method is used to upload a file with a size limit of 1MB. The file is uploaded in a single step using a `POST` request.

---

##### Request

**POST** `https://api.cbddev.xyz/api/v2015/temporary-files`

---

##### Headers

| Field         | Type   | Description                       |
| ------------- | ------ | --------------------------------- |
| Authorization | String | Required authorization token      |
| Content-Type  | String | multipart/form-data; boundary=... |

##### Body

Form-Data:
| Key | Value |
| ---------------- | ------ |
| file | File Binary |

##### Response Body

| Name        | Type   |
| ----------- | ------ |
| url         | String |
| uid         | String |
| hash        | String |
| size        | Number |
| contentType | String |
| metadata    | Object |

##### Response Example

```json
{
  "url": "https://s3.amazonaws.com/cbd.documents.temporary/4fa0f71b-cd7c-c0ce-03a4-3dd264fdcde3?AWSAccessKeyId=AKIAIABSUSESLXAZRGMQ&Expires=1734709685&Signature=gyq8UILFrezIPAPq%2FYKO7xzaAMk%3D",
  "uid": "4fa0f71b-cd7c-c0ce-03a4-3dd264fdcde3",
  "contentType": "application/pdf",
  "metadata": {
    "fileName": "5_KB_file.pdf",
    "user": "301785"
  },
  "hash": "0071b125fc59b2b39651854beddbe275",
  "size": 5120
}
```

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetFileWithLimitSpecs" />
