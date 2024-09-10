## Get Info

### Overview
The "Get Info" API endpoint retrieves detailed information about a specific revision of a document. By specifying the document identifier (`uid`) and the revision number, this endpoint provides metadata and other relevant details about the specified version of the document. This can include information such as the creation date, last modified date, author, document status, and any other metadata associated with that particular revision.

### Endpoint

**GET** `/api/v2013/documents/:uid/versions/:revision/info`

### Headers
<!--@include: @/../components/common/header/realm-accept.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-revision.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerGetInfoSpecs" />