## List

### Overview

The "List" endpoint retrieves a collection of locks associated with the draft version of a specific document. This endpoint is essential for managing and monitoring document locks within a draft workflow. It provides a comprehensive view of all active and relevant locks for a given document, helping users understand the current lock status and resolve any conflicts that may arise during document editing.


### Endpoint
**GET** `/api/v2013/documents/:uid/versions/draft/locks`

### Headers
<!--@include: ../../common/header/authorization-realm.md-->

### URL Parameters
<!--@include: ../../common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerListSpecs" />