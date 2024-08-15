## Update

### Overview

The "Update" API endpoint allows you to modify the details of a specific attachment associated with a given document. This endpoint provides the functionality to update metadata related to the attachment, such as its name, description, or other relevant attributes. This operation is crucial for maintaining accurate and up-to-date information about attachments within the document management system.

### Endpoint

**PUT** `/api/v2013/documents/{uid}/attachments/{filename}`

### Headers
<!--@include: ../../common/header/authorization.md-->


### URL Parameters
<!--@include: ../../common/url/uid-filename.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerUpdateSpecs" />