## Get Thumbnail

### Overview

This endpoint retrieves a thumbnail image of a specific document attachment. This is useful for displaying a preview of the attachment, such as an image, PDF, or other visual files, without downloading the entire file.

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments/{attachmentId}/{filename}/thumbnail`

### Headers
<!--@include: @/../components/common/header/accept.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-attachmentId-filename.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerThumbnailSpecs" />