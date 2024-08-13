## Get Thumbnail

### Overview

This endpoint retrieves a thumbnail of a specific attachment if it is an image. It returns the raw image data or redirects to the location of the thumbnail.

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments/{filename}/thumbnail`

### Headers

| Field   | Type   | Description                 |
| ------- | ------ | --------------------------- |
| Accept  | String | Result format. Allowed value: `application/json` |

### URL Parameters

| Field     | Type   | Description                                                                                      |
| --------- | ------ | ------------------------------------------------------------------------------------------------ |
| uid       | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |
| filename  | String | Name of the file to check for existence.                                                         |

### Playground

<SwaggerUI :swaggerSpecs="swaggerThumbnailSpecs" />