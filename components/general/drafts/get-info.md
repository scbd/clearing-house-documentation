## Get Info

### Overview

The "Get Info" API endpoint retrieves detailed information about the draft version of a document based on the provided document identifier (`uid`). This endpoint provides metadata and other relevant details about the draft version, which can be useful for reviewing the document's status, checking its attributes, or preparing for further actions such as updates or finalizations.

### Endpoint

**GET** `/api/v2013/documents/{uid}/versions/draft/info`

### Headers
<!--@include: ../../common/header/authorization-realm.md-->

### URL Parameters
<!--@include: ../../common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetInfoSpecs" />