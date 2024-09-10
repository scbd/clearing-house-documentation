## Can Update

### Overview

The "Can Update" endpoint is used to determine if the current user has the necessary permissions to update a draft version of a document specified by the `uid`. This endpoint plays a crucial role in ensuring that only authorized users can make changes to draft documents, thereby protecting the integrity and security of document updates within the system.

### Endpoint

**GET** `/api/v2013/documents/{uid}/versions/draft/securities/update`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### Query Parameters
<!--@include: @/../components/common/query/schema-metadata-government.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerCanUpdateSpecs" />