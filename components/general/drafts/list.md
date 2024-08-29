## List

### Overview

The "List" API endpoint retrieves a paginated list of document drafts based on the provided query parameters. This endpoint allows clients to obtain a comprehensive overview of all drafts associated with the user's account or specified collection. It supports filtering, sorting, and pagination to manage and view a large number of drafts efficiently.

### Endpoint

**GET** `/api/v2013/document-drafts`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### Query Parameters
<!--@include: @/../components/common/query/collection-filter-orderby-top-skip.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerListSpecs" />