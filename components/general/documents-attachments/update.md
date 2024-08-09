## Update

### Overview

This endpoint updates the details of a specific attachment for a given document. It requires authentication and updates the attachment metadata.

### Endpoint

**PUT** `/api/v2013/documents/{uid}/attachments/{filename}`

### Headers

| Field       | Type   | Description                              |
|-------------|--------|------------------------------------------|
| Authorization | String | Token used for authenticating the request |
| Accept       | String | Desired result format                    |


### URL Parameters

| Field     | Type   | Description                                                                                      |
| --------- | ------ | ------------------------------------------------------------------------------------------------ |
| uid       | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |
| filename  | String | Name of the file to check for existence.                                                         |

### Playground

<SwaggerUI :swaggerSpecs="swaggerUpdateSpecs" />