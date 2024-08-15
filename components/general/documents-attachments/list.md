## List

### Overview

The "List" API endpoint retrieves a comprehensive list of attachments associated with a specific document. This endpoint is designed to support various filtering, ordering, and pagination options, allowing you to efficiently manage and retrieve attachments based on specific criteria. 

### Endpoint

**GET** `/api/v2013/documents/{uid}/attachments`

### Headers
<!--@include: ../../common/header/authorization.md-->

### Query Parameters
<!--@include: ../../common/query/filter-orderby-top-skip.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerListSpecs" />