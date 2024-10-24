<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/cpc/create.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# CPC - Create

## Overview
This documentation describes the API endpoint for creating a new CPC (Checkpoint Communiqué) document using the `POST` method. The endpoint allows clients to submit a new document to the system, enabling the creation and storage of compliance certificates or other related documentation.


## Endpoint

**POST** `/api/v2013/documents`

This is the endpoint to which the POST request should be made to create a new document.

## Header
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

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
