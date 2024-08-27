## Exists

### Overview

The "Exists" API endpoint checks whether a draft version of a document exists in the system based on the provided document identifier (`uid`). This endpoint allows clients to verify the presence of a draft version without retrieving its full content. It is particularly useful for determining if a draft document is available before attempting further operations such as updates or deletions.

### Endpoint

**HEAD** `/api/v2013/documents/{uid}/versions/draft`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerExistsSpecs" />