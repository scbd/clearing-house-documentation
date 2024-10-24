<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/cpc/update.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# cpc - Update

## Overview

This documentation describes the API endpoint for updating an existing CPC (Checkpoint Communiqué) document using the `PUT` method. This endpoint allows clients to modify the details of a document that is already present in the system. The update operation can be used to change various attributes of the document based on the provided `uid`.


## Endpoint

**PUT** `/api/v2013/documents/:uid`

This is the endpoint to which the PUT request should be made to update an existing document.

## Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: @/../components/common/query/schema.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Validation Errors
<!--@include: @/../components/common/validation-error.md-->

## Request Body
<!--@include: @/../components/cpc/request-body.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>