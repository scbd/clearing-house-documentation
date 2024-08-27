## Get

### Overview
The "Get" API endpoint allows you to retrieve the data of a specific attachment associated with a given document. By providing the document identifier (`uid`) and the attachment filename, this endpoint returns the attachment in its original format, provided that it exists. This is useful for downloading or accessing the content of an attachment directly.

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments/{filename}`

### Headers
<!--@include: ../../common/header/accept.md-->


### URL Parameters
<!--@include: ../../common/url/uid-filename.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetSpecs" />