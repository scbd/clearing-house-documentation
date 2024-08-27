## Get

### Overview

The "Get" API endpoint retrieves the draft version of a document based on the provided document identifier (`uid`). This endpoint is used to fetch the full content of the draft version, which includes all its details and attributes. It is particularly useful for reviewing or working with the draft before making any updates or finalizing the document.

### Endpoint

**GET** `/api/v2013/documents/:uid/versions/draft`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetSpecs" />