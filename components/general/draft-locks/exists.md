## Exists

### Overview

The "Exists" endpoint checks whether a specific lock associated with a draft version of a document exists in the system. This endpoint is crucial for managing document locks and ensuring that only authorized operations are performed on locked documents. Locks are used to prevent concurrent modifications and ensure that the document is not edited by multiple users simultaneously.

### Endpoint
**HEAD** `/api/v2013/documents/{uid}/versions/draft/locks/{lockID}`

### Headers
<!--@include: ../../common/header/realm-accept.md-->

### URL Parameters
<!--@include: ../../common/url/uid-lockid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerExistsSpecs" />