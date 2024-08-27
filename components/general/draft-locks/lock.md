## Lock

### Overview

The "Lock" endpoint is used to apply or update a lock on the draft version of a specific document. Locking a document prevents other users from making concurrent modifications, thus ensuring that changes are managed and synchronized effectively. This is particularly important in collaborative environments where multiple users may be working on the same document.

### Endpoint
**PUT** `/api/v2013//api/v2013/documents/:uid/versions/draft/locks/:lockID`

### Headers
<!--@include: ../../common/header/authorization-realm.md-->

### URL Parameters
<!--@include: ../../common/url/uid-lockid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerLockSpecs" />