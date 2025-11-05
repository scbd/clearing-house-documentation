## Exists

### Overview
This endpoint is used to check if a specific attachment is associated with a given document. By providing the document identifier (uid), the attachment identifier (attachmentId), and the attachment filename (filename), this endpoint determines whether the specified attachment exists without retrieving or displaying the full content of the attachment.

### Endpoint

**HEAD** `/api/v2013/documents/{uid}/attachments/{attachmentId}/{filename}`

### Headers
<!--@include: @/../components/common/header/accept.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-attachmentId-filename.md-->


### Playground

<SwaggerUI :swaggerSpecs="swaggerExistsSpecs" />