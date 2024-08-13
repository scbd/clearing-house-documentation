## Save

### Endpoint

**PUT** `/api/v2013/documents/:uid/versions/draft`


### Headers

| Field            | Type    | Description                                                                       |
| ---------------- | ------- | --------------------------------------------------------------------------------- |
| Content-Type     | String &nbsp;&nbsp;  | Raw document format mediaType. Allowed values: `application/json`                 |
| Authorization    | String  | Token to use to authenticate the request                                          |
| Realm            | String  | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM`, `BCH` |
| Accept           | String  | Result format. Allowed values: `application/json`                                 |

**Realm Values for Development:**
- `ABS-DEV`: Development environment for ABS
- `BCH-DEV`: Development environment for BCH
- `CHM-DEV`: Development environment for CHM


Headers required to authenticate and define the context and format of the request and response. The `Authorization` header must contain a valid token, while the `Content-Type` and `Accept` headers specify the format of the document and response, respectively. [Here are the steps to get the Authorization token](/user/authentication).

### Query Parameters

| Field  | Type   | Description                                     |
|--------|--------|-------------------------------------------------|
| `schema` | String | Specify the document common-format posted (type/schema) |

### URL Parameters

| Field     | Type   | Description                                                                                      |
| --------- | ------ | ------------------------------------------------------------------------------------------------ |
| uid       | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |

### Playground

<SwaggerUI :swaggerSpecs="swaggerSaveSpecs" />