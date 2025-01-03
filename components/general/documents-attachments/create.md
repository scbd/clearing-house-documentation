## Create

### Overview

This endpoint allows users to upload a file as an attachment to a specific document. The file is uploaded in binary format, with the document identified by its unique identifier `uid` and the file specified by its name `filename`.

### Endpoint

**POST** `/api/v2013/documents/{uid}/attachments/{filename}`

### Headers
<!--@include: @/../components/common/header/authorization.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-filename.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerCreateSpecs" />