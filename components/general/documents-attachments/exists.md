## Exists

### Overview
This endpoint checks whether a specific attachment exists for a given document. It is used to verify the presence of an attachment without retrieving the full content.

### Endpoint

**HEAD** `/api/v2013/documents/{uid}/attachments/{filename}`

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

<SwaggerUI :swaggerSpecs="swaggerExistsSpecs" />