## Can Delete

### Overview

This API endpoint allows clients to check if a specific document can be deleted. It verifies whether the user has the necessary permissions to perform the delete operation on the document identified by the provided `uid`. This check ensures that the user is authorized to delete the document and that the operation complies with the system's security and access control policies. The endpoint helps prevent unauthorized deletion of documents by validating access rights before the actual delete operation is executed.

### Endpoint
**GET** `/api/v2013/documents/{uid}/securities/delete`

### Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

### URL Parameters
<!--@include: @/../components/common/url/uid.md-->

### Playground

<SwaggerUI :swaggerSpecs="swaggerDeleteSpecs" />