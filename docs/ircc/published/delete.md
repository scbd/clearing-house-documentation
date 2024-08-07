<script setup>
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/ircc.published.delete.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# IRCC - Delete

## Endpoint

This endpoint allows you to delete a specific document identified by its unique identifier (`uid`). The request uses the HTTP `DELETE` method to remove the document from the system.

**DELETE** `/api/v2013/documents/:uid`

<!--@include: ../../../components/common/authorization-header.md-->

<!--@include: ../../../components/common/url-uid-parameter-section.md-->

<!--@include: ../../../components/common/query-schema-parameter-section.md-->

<!--@include: ../../../components/common/environment-urls.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />