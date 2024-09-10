## Delete

### Overview

The "Delete" API endpoint allows clients to remove a draft version of a document from the system. This endpoint is used when a draft document needs to be deleted before it is finalized or published. It ensures that only draft versions, which are in the process of being created or reviewed, are deleted, while finalized or published versions remain intact.

### Endpoint

**DELETE** `/api/v2013/documents/{uid}/versions/draft`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerDeleteSpecs" />