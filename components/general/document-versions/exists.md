## Exists

### Overview

This API endpoint is used to determine whether a specific revision of a document has been published and is available in the system. By providing the document identifier (`uid`) and the revision number, clients can check if that particular version of the document exists. This check is crucial for scenarios where you need to verify the presence of a specific version before performing operations such as viewing, updating, or deleting the document.

### Endpoint

**HEAD** `/api/v2013/documents/:uid/versions/:revision`

### Headers
<!--@include: @/../components/common/header/realm-accept.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid-revision.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerExistsSpecs"/>