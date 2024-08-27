## Get Thumbnail

### Overview

The "Get Thumbnail" API endpoint allows you to retrieve a thumbnail representation of a specific attachment, provided the attachment is an image. This endpoint is designed to offer a preview of the image in a smaller, more manageable format, which is especially useful for displaying previews in user interfaces, galleries, or file management systems.

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments/{filename}/thumbnail`

### Headers
<!--@include: ../../common/header/accept.md-->

### URL Parameters
<!--@include: ../../common/url/uid-filename.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerThumbnailSpecs" />