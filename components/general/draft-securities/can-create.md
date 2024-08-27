## Can Create

### Overview

The "Can Create" endpoint determines whether a user has the necessary permissions to create a draft version of a document identified by the provided `uid`. It checks the user's access rights based on the specified security context and metadata associated with the document. This endpoint is essential for ensuring that only authorized users can initiate or modify draft documents within the system.

### Endpoint

**GET** `/api/v2013/documents/{uid}/versions/draft/securities/create`

### Headers
<!--@include: ../../common/header/authorization-realm.md-->

### Query Parameters
<!--@include: ../../common/query/schema-metadata-government.md-->

### URL Parameters
<!--@include: ../../common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerCanCreateSpecs" />