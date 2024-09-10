## List

### Overview
The "List" API endpoint retrieves a list of all available revisions for a specific document. By specifying the document identifier (`uid`), this endpoint returns information about all the versions of the document stored in the system. This includes metadata and version details for each revision, providing a comprehensive overview of the document’s version history.

### Endpoint
**GET** `/api/v2013/documents/:uid/versions`

### Headers
<!--@include: @/../components/common/header/realm-accept.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Query String Parameters
<!--@include: @/../components/common/query/filter-orderby-top-skip.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerListSpecs" />