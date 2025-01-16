<script>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/ircc/update.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# IRCC - Update

## Overview

This documentation describes the API endpoint for updating an existing IRCC (Internationally Recognized Certificate of Compliance) document using the `PUT` method. This endpoint allows clients to modify the details of a document that is already present in the system. The update operation can be used to change various attributes of the document based on the provided `uid`.


<!--@include: @/../components/ircc/introduction.md-->

## Endpoint

**PUT** `/api/v2013/documents/:uid`

This is the endpoint to which the PUT request should be made to update an existing document.

## Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

**Realm Values:**

<table>
    <thead>
        <tr>
            <th>Applications</th>
            <th>Development Realm</th>
            <th>Production Realm</th>
        </tr>
    </thead>
    <tbody>
        <!--@include: @/../components/common/realm/abs.md-->
    </tbody>
</table>

## Query Parameters
<!--@include: @/../components/common/query/schema.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Validation Errors
<!--@include: @/../components/common/validation-error.md-->

## Request Body
<!--@include: @/../components/ircc/request-body.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>