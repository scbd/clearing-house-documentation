## Exists

### Overview
The "Exists" API endpoint is used to check if a specific attachment is associated with a given document. By providing the document identifier (`uid`) and the attachment filename, this endpoint determines whether the specified attachment exists without retrieving or displaying the full content of the attachment. This is useful for validating the presence of attachments before attempting to access or manipulate them.

### Endpoint

**HEAD** `/api/v2013/documents/{uid}/attachments/{filename}`

### Headers
<!--@include: @/../components/common/header/accept.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-filename.md-->


### Playground

<SwaggerUI :swaggerSpecs="swaggerExistsSpecs" />