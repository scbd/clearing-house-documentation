<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerWorkflowCreateJson from "@/swagger/json/ircc/workflow-create.json";
import swaggerWorkflowUpdateJson from "@/swagger/json/ircc/workflow-update.json"

const swaggerSpecs = [
  { json: swaggerWorkflowCreateJson, protected: true },
  { json: swaggerWorkflowUpdateJson, protected: true },
];

</script>

# Workflow

## Overview

The Workflow API is designed to manage the creation and updating of documents within a specific schema. It combines several steps, involving checks, validation, and saving processes, to ensure the integrity and proper handling of documents.

### Steps Overview:

1. **Check Document ID**: Verify if the document ID exists. This step also ensures that the document is not locked.

2. **Create Securities**: If the document ID is valid, securities are created.

3. **Validate Document**: The document is validated against a specific.

4. **Save Draft**: After validation, the document draft is saved.

5. **Initiate Workflow**: Finally, the workflow is initiated.

The API allows the creation or updating of documents. The request body must include a valid `document` parameter. If there are any validation errors, the system will return detailed error messages based on the content of the document.

## Endpoint

### Create a Document

To create a new document, use the **POST** method with one of the following endpoints:

**POST** `/api/v2023/documents/schemas/:schema` <br>
**POST**  `/api/v2023/documents/schemas/:schema/:identifier?`


### Update a Document

To update an existing document, use the **PUT** method with the following endpoint:

**PUT** `/api/v2023/documents/schemas/:schema/:identifier`

## Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

<br>

**Realm Values for Development:**

<!--@include: @/../components/common/realm/abs-dev.md-->

## URL Parameters
<!--@include: @/../components/common/url/schema-identifier.md-->

## Query Parameters
<!--@include: @/../components/common/query/realm.md-->

## Request Body
<!--@include: @/../components/ircc/workflow/request-body.md-->

## Validation Error
<!--@include: @/../components/ircc/workflow/conditional-validation.md-->

The following error conditions may occur while interacting with the API. Each entry describes a specific error status code, along with an error message explaining the issue and any additional requirements for successful execution.

<!--@include: @/../components/ircc/workflow/request-error.md-->

When the document parameter is included in the request body, any issues with the document’s content will be detailed in the "errors" property of the response. Each error in this property is represented by an object containing the specific error code and the related field or property. Below is an example response showing the structure of the "errors" property, followed by a table describing the possible error types and their meanings.
<br>
<br>
###### Example Error Response:

```json
{
    "identifier": "DECLARE-ORGANISATION_5885_20241031144831187",
    // Additional properties may be included based on the request.
    "errors": [
        {
            "code": "Error.Mandatory",
            "property": "government"
        }
    ]
}
```

<!--@include: @/../components/common/validation-error.md-->


## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />