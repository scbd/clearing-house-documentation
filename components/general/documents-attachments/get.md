## Get

### Overview
This endpoint retrieves an attachment for a specific document. The endpoint uses the uid of the document and the attachmentId of the attachment to locate the file, allowing clients to download the attachment.

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments/{attachmentId}/{filename}`

### Headers
<!--@include: @/../components/common/header/accept.md-->


### URL Parameters
<!--@include: @/../components/common/url/uid-attachmentId-filename.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetSpecs" />