## Upload From Temporary Storage

### Overview
This API endpoint allows persisting a temporary file as an attachment to a document. It takes the unique identifier of the document (`uid`) and the temporary file (`tempFileId`) and associates the temporary file as a permanent attachment to the specified document. There is no limit to the file size that can be uploaded through this endpoint.

<b>Note:</b> To create a temporary file that can be used with this endpoint, refer to the <a href="temporary-file">Temporary File Creation Guide</a>.

---

### Request
**POST** `/api/v2013/documents/{uid}/attachments/persist-temporary/{tempFileId}`

---

### Headers
<!--@include: @/../components/common/header/authorization.md-->

---

### URL Parameters
<!--@include: @/../components/common/url/uid-tempFileId.md-->

---

### Playground

<SwaggerUI :swaggerSpecs="swaggerCHStorageSpecs" />
