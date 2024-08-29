## Get

### Overview
The "Get" API endpoint is used to retrieve the content of a specific revision of a document. By providing the document identifier (`uid`) and the revision number, this endpoint allows clients to access the full content of the document for that particular version. This functionality is essential for document retrieval and viewing, enabling users to fetch and display the exact version of a document they are interested in.

### Endpoint
**GET** `/api/v2013/documents/:uid/versions/:revision`

### Headers
<!--@include: @/../components/common/header/realm-accept.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-revision.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetSpecs" />