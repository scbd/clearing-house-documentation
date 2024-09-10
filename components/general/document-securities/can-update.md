## Can Update

### Overview

This API endpoint allows clients to determine whether a specific document can be updated based on the provided metadata. It performs a security check to ensure that the user has the necessary permissions to update the document identified by the `uid`. This endpoint is crucial for validating authorization and access rights before making any changes to the document. It helps in ensuring that updates are only made if the user or system has the appropriate privileges and that the document meets all necessary conditions for the update.

### Endpoint
**GET** `/api/v2013/documents/{uid}/securities/update`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### Query Parameters
<!--@include: @/../components/common/query/metadata-government.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerUpdateSpecs" />