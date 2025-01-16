<script>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/contact/create.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# Contact - Create

## Overview

This documentation describes the API endpoint for creating a new Contact record using the `POST` method. The endpoint allows clients to submit a new record to the system, enabling the creation and storage of compliance certificates or other related documentation.

## Endpoint

**POST** `/api/v2013/documents`

This is the endpoint to which the POST request should be made to create a new record.

## Header
<!--@include: @/../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: @/../components/common/query/schema.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Validation Errors
<!--@include: @/../components/common/validation-error.md-->

## Request Body
<!--@include: @/../components/contact/request-body.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
