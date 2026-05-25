<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import RequestBody from '@/components/contact/request-body.md'
import swaggerJson from "@/swagger/json/contact/update";
import { useClearingHouse } from "@/utils/composables"

const swaggerSpecs = [
  { json: swaggerJson(useClearingHouse().apiUrl), protected: true },
];
</script>

# Contact - Update

## Overview

This documentation describes the API endpoint for updating an existing Contact record using the `PUT` method. This endpoint allows clients to modify the details of a record that is already present in the system. The update operation can be used to change various attributes of the record based on the provided `uid`.

## Endpoint

**PUT** `/api/v2013/documents/:uid`

This is the endpoint to which the PUT request should be made to update an existing record.

## Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

<br>

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
        <!--@include: @/../components/common/realm/bch.md-->
        <!--@include: @/../components/common/realm/chm.md-->
    </tbody>
</table>


## Query Parameters
<!--@include: @/../components/common/query/schema.md-->

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Validation Errors
<!--@include: @/../components/common/validation-error.md-->

## Request Body
<RequestBody />

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs"/>
