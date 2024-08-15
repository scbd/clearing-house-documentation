<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../swagger/json/general/document-validations/validations.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# Document Validations

## Overview

The "Document Validations" API endpoint is designed to validate documents within the IRCC (Immigration, Refugees and Citizenship Canada) system. This endpoint allows clients to submit a document for validation based on a specified schema and optional parameters. It performs a series of checks to ensure that the document conforms to the required format and rules defined by the schema.

## Endpoint
**POST** `/api/v2013/documents/x/validate`

## Headers
<!--@include: ../../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: ../../components/common/query/schema-metadata-government.md-->

## Validation Error
<!--@include: ../../components/common/validation-error.md-->

## Request Body
<!--@include: ../../components/ircc/request-body.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
