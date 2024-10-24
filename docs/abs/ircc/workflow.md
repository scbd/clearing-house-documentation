<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/ircc/workflow.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];

</script>

# Workflow

## Overview

The Workflow API is designed to manage the creation and updating of documents within a specific schema. It combines several steps, involving checks, validation, and saving processes, to ensure the integrity and proper handling of documents.

### Steps Overview:

1. **Check Document ID**: Verify if the document ID exists using the `/api/v2013/documents/{id}/versions/draft?cache=true&info=true` endpoint. This step also ensures that the document is not locked.

2. **Create Securities**: If the document ID is valid, securities are created using the `/api/v2013/documents/{id}/versions/draft/securities/create?metadata={metadata}` endpoint.

3. **Validate Document**: The document is validated against a specific schema using the `/api/v2013/documents/x/validate?schema=measure` endpoint.

4. **Save Draft**: After validation, the document draft is saved using the `/api/v2013/documents/{id}/versions/draft` endpoint.

5. **Initiate Workflow**: Finally, the workflow is initiated through the `/api/v2013/workflows` endpoint.

The API allows the creation or updating of documents by sending a request to the `/api/v2023/documents/schemas/:schema` endpoint. The request body must include a valid `document` parameter. If there are any validation errors, the system will return detailed error messages based on the content of the document.

## Endpoint

**POST/PUT** `/api/v2023/documents/schemas/:schema`

## Headers
<!--@include: @/../components/common/header/authorization.md-->

## URL Parameters
<!--@include: @/../components/common/url/schema.md-->

## Query Parameters
<!--@include: @/../components/common/query/realm.md-->

## Request Body
<!--@include: @/../components/ircc/workflow/request-body.md-->

## Validation Error
<!--@include: @/../components/ircc/workflow/request-error.md-->

When passing the `document` parameter in the request body, if there are any errors in the document, the following errors will be received:

<!--@include: @/../components/common/validation-error.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />