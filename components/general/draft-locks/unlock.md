## Unlock

### Overview

The "Unlock" endpoint is used to remove or release a lock from the draft version of a specific document. This operation is essential for managing document access and ensuring that locks on documents are properly released when they are no longer needed. By unlocking a document, you allow other users to gain access and make changes to the draft version.

### Endpoint
**DELETE** `/api/v2013//api/v2013/documents/:uid/versions/draft/locks/:lockID`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-lockid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerUnLockSpecs" />