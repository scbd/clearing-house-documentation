<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/stakeholderCommitment/get";
import { useClearingHouse } from "@/utils/composables"

const swaggerSpecs = [
  { json: swaggerJson(useClearingHouse().apiUrl), protected: false },
];

</script>

# Stakeholder Commitment - Get

## Overview

This documentation describes the API endpoint for retrieving a specific stakeholderCommitment (Stakeholder Commitment) document using the `GET` method. This endpoint allows clients to fetch detailed information about a document from the system using its unique identifier (`uid`). It is used to retrieve and view the details of an existing document.


## Endpoint
**GET** `/api/v2013/documents/:uid`

## Headers
<!--@include: @/../components/common/header/realm-accept.md-->
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
        <!--@include: @/../components/common/realm/ort.md-->
    </tbody>
</table>

## URL Parameters
<!--@include: @/../components/common/url/uid.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
