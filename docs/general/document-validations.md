<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../swagger/json/general.document-validations.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# Document Validations

## Overview

This documentation describes the API endpoint for validating documents in the IRCC system. The endpoint performs validation on a specified document schema.

## Endpoint

**POST** `/api/v2013/documents/x/validate`

This endpoint allows clients to validate documents by specifying the schema and other optional parameters.

## Headers

| Field         | Type                | Description                                                                              |
| ------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Content-Type  | String &nbsp;&nbsp; | Raw document format mediaType. Allowed values: `application/json`                        |
| Authorization | String              | Token to use to authenticate the request                                                 |
| Realm         | String              | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM`, `BCH` |
| Accept        | String              | Result format. Allowed values: `application/json`                                        |

**Realm Values for Development:**

- `ABS-DEV`: Development environment for ABS
- `BCH-DEV`: Development environment for BCH
- `CHM-DEV`: Development environment for CHM

Headers required to authenticate and define the context and format of the request and response. The `Authorization` header must contain a valid token, while the `Content-Type` and `Accept` headers specify the format of the document and response, respectively. [Here are the steps to get the Authorization token](/user/authentication).

## Query Parameters

| Field      | Type                            | Description                                                                                                                         |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| schema     | String &nbsp;&nbsp;&nbsp;&nbsp; | Specify the document common-format posted (type / schema)                                                                           |
| metadata   | Object                          | Optional. Document metadata to use to determine security access. The list of parameters may vary depending on the type of document. |
| government | String                          | Optional. Government code to which the record should belong. For national records only. Allowed values: "ISO 3166-1 alpha-2"        |

<!--@include: ../../components/common/validation-error.md-->

<!--@include: ../../components/ircc/request-body.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
