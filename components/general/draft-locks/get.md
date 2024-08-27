## Get

### Overview

The "Get" endpoint retrieves information about a specific lock associated with a draft version of a document. This endpoint provides details about the lock, including its status and any associated metadata. It is useful for understanding the current state of a lock, including who holds the lock and when it was set.

### Endpoint
**GET** `/api/v2013/documents/:uid/versions/draft/locks/:lockID`

### Headers
<!--@include: ../../common/header/realm-accept.md-->

### URL Parameters
<!--@include: ../../common/url/uid-lockid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetSpecs" />