## List

### Endpoint
**GET** `/api/v2013/documents/:uid/versions`

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

| Field      | Type   | Description                                               |
|------------|--------|-----------------------------------------------------------|
| uid        | String &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11, 128}$/` |

### Query String Parameters

| Field      | Type   | Description                                                                                         |
|------------|--------|-----------------------------------------------------------------------------------------------------|
| $filter    | String &nbsp; | The `$filter` system query option allows clients to filter a collection of resources. See: OData $filter |
| $orderby   | String | The `$orderby` system query option allows clients to request resources in a particular order. See: OData $orderby |
| $top       | String | The `$top` system query option requests the number of items in the queried collection to be included in the result. See: OData $top |
| $skip      | String | The `$skip` query option requests the number of items in the queried collection that are to be skipped and not included in the result. See: OData $skip |

### Playground

<SwaggerUI :swaggerSpecs="swaggerListSpecs" />