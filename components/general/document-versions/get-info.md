## Get Info

### Endpoint

**GET** `/api/v2013/documents/:uid/versions/:revision/info`

### Headers

| Field            | Type    | Description                                                                       |
| ---------------- | ------- | --------------------------------------------------------------------------------- |
| Content-Type     | String &nbsp;&nbsp;  | Raw document format mediaType. Allowed values: `application/json`                 |
| Realm            | String  | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM`, `BCH` |
| Accept           | String  | Result format. Allowed values: `application/json`                                 |

**Realm Values for Development:**
- `ABS-DEV`: Development environment for ABS
- `BCH-DEV`: Development environment for BCH
- `CHM-DEV`: Development environment for CHM

### URL Parameters

| Field     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| `uid`     | String &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11, 128}$/` |
| `revision`| Number | Revision number of the document. Allowed values: `1+` |


### Playground

<SwaggerUI :swaggerSpecs="swaggerGetInfoSpecs" />