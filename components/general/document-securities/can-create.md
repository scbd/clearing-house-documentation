## Can Create

### Overview

This API endpoint allows clients to determine if a document can be created given the provided metadata. It performs a security check to verify if the document creation is permitted based on the supplied metadata. This is particularly useful for validating permissions and ensuring that the document meets all necessary requirements before attempting to create it. The endpoint evaluates security access controls and returns a response indicating whether the creation operation is authorized.

### Request URL
**GET** `/api/v2013/documents/{uid}/securities/create`

### Headers
<!--@include: ../../common/header/authorization-realm.md-->

### Query Parameters
<!--@include: ../../common/query/schema-metadata-government.md-->

### URL Parameters
<!--@include: ../../common/url/uid.md-->



### Playground

<SwaggerUI :swaggerSpecs="swaggerCreateSpecs" />