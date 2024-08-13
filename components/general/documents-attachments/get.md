## Get

### Overview

This endpoint retrieves the data of a specific attachment for a given document. It provides the attachment in its original format if it exists.

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments/{filename}`

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

<SwaggerUI :swaggerSpecs="swaggerGetSpecs" />