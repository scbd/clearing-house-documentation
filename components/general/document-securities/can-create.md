## Can Create

### Overview

This API endpoint determines if a document can be created based on the supplied metadata. It checks the security access based on the provided metadata and returns whether the creation of the document is allowed.

### Request URL

**GET** `/api/v2013/documents/{uid}/securities/create`


### Headers

<!--@include: ../../common/authorization-header.md-->


### Query Parameters

| Field      | Type   | Description                                               |
|------------|--------|-----------------------------------------------------------|
| schema     | String &nbsp;&nbsp;&nbsp; | Specify the document common-format posted (type/schema)  |
| metadata   | Object | Optional. Document metadata to use to determine security access. List of parameters may vary depending on the type of document. |
| government | String | Optional. Government code to which the record should belong. For national records only. Allowed values: `ISO 3166-1 alpha-2` |


### URL Parameters

| Field | Type   | Description                                                                                   |
| ----- | ------ | --------------------------------------------------------------------------------------------- |
| uid &nbsp;&nbsp;   | String &nbsp; | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

URL parameters include essential identifiers for the document. The `uid` parameter uniquely identifies the document in the system.


### Playground

<SwaggerUI :swaggerJson="swaggerCreateJson" :protected="true" domId="swaggerCreate" />