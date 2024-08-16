## Save

### Overview

The "Save" API endpoint is used to update or create a draft version of a document in the system. This endpoint allows clients to submit the latest changes or create a new draft for a specified document by providing the document's unique identifier (`uid`). This operation is crucial for managing document versions, allowing users to save changes to a draft before finalizing or publishing the document.

### Endpoint
**PUT** `/api/v2013/documents/:uid/versions/draft`

### Headers
<!--@include: ../../common/header/authorization-realm.md-->

### Query Parameters
<!--@include: ../../common/query/schema.md-->

### URL Parameters
<!--@include: ../../common/url/uid.md-->


### Playground

<SwaggerUI :swaggerSpecs="swaggerSaveSpecs" />