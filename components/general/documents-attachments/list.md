## List

### Overview

This endpoint retrieves a list of attachments associated with a specific document. It supports filtering, ordering, and pagination through query parameters.

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments`

### Headers

| Field        | Type   | Description                                         |
| ------------ | ------ | --------------------------------------------------- |
| Authorization | String | Token to use to authenticate the request.           |
| Accept       | String | Result format. Allowed values: "application/json".  |

### Query Parameters

| Field   | Type   | Description  |
| ------- | ------ | ------------------------------------------- |
| filter  | String | Optional. The `$filter` system query option allows clients to filter a collection of resources. [See OData $filter](https://www.odata.org/documentation/odata-v4/uri-conventions/#filter-system-query-option). |
| orderby | String | Optional. The `$orderby` system query option allows clients to request resources in a particular order. [See OData $orderby](https://www.odata.org/documentation/odata-v4/uri-conventions/#orderby-system-query-option). |
| top     | String | Optional. The `$top` system query option requests the number of items in the queried collection to be included in the result. [See OData $top](https://www.odata.org/documentation/odata-v4/uri-conventions/#top-system-query-option). |
| skip    | String | Optional. The `$skip` query option requests the number of items in the queried collection that are to be skipped and not included in the result. [See OData $skip](https://www.odata.org/documentation/odata-v4/uri-conventions/#skip-system-query-option). |

### Playground

<SwaggerUI :swaggerSpecs="swaggerListSpecs" />