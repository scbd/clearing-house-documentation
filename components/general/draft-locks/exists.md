## Exists


### Endpoint
**HEAD** `/api/v2013/documents/{uid}/versions/draft/locks/{lockID}`


### Headers
| Field   | Type   | Description                            |
| ------- | ------ | -------------------------------------- |
| Realm   | String | Context in which the Clearing-House request is made. |
| Accept  | String | Result format.                         |

**Realm Values for Development:**
- `ABS-DEV`: Development environment for ABS
- `BCH-DEV`: Development environment for BCH
- `CHM-DEV`: Development environment for CHM


### URL Parameters

| Field | Type   | Description                                    |
| ----- | ------ | ---------------------------------------------- |
| uid   | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/`  |
| lockID | String | Identifier that uniquely identifies a lock. |

### Playground

<SwaggerUI :swaggerSpecs="swaggerExistsSpecs" />