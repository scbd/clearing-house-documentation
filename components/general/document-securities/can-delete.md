## Can Delete

### Overview

This endpoint checks if a document can be deleted based on the supplied `uid`. It verifies if the user has the necessary permissions to perform the delete operation on the document.

### Endpoint

**GET** `/api/v2013/documents/{uid}/securities/delete`

### Headers

<!--@include: ../../common/authorization-header.md-->

### URL Parameters

| Field | Type   | Description                                                                                   |
| ----- | ------ | --------------------------------------------------------------------------------------------- |
| uid &nbsp;&nbsp;   | String &nbsp; | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

URL parameters include essential identifiers for the document. The `uid` parameter uniquely identifies the document in the system.

### Playground

<SwaggerUI :swaggerSpecs="swaggerDeleteSpecs" />