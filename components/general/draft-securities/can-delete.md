## Can Delete

### Overview

The "Can Delete" endpoint checks whether the current user has the necessary permissions to delete a draft version of a document specified by the `uid`. This endpoint is crucial for verifying that a user has the appropriate authorization to remove a draft document from the system. It ensures that deletion operations are performed only by users with the correct access rights.

### Endpoint
**GET** `/api/v2013/documents/{uid}/versions/draft/securities/delete`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerCanDeleteSpecs" />