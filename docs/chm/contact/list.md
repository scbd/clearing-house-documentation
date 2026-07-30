<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import contact from "@/swagger/schemas/chm/contact"
import { listSpec } from "@/swagger/generators/documents"
import { useClearingHouse } from "@/utils/composables"

const { apiUrl, realm } = useClearingHouse()

const swaggerSpecs = [
  { json: listSpec({ apiUrl, realm, schema: contact }), protected: true },
];
</script>

# Contact - List

## Overview

Lists Contact records in the Clearing-House Mechanism with OData-style query parameters for filtering, sorting and paging. Use the `collection` parameter to restrict the query, e.g. `my` for your own records (including drafts).

## Endpoint

**GET** `/api/v2013/documents`

**Realm for this application and environment:** <code>{{ realm }}</code> (sent as the `Realm` HTTP header)

Calls to this endpoint require a bearer token — see [User - Authentication](/chm/user/authentication).

## Query Parameters

| Parameter | Description |
| --- | --- |
| `$filter` | Filter expression selecting the record type, e.g. `(type eq 'contact')`. |
| `$orderby` | Sort order of the results, e.g. `updatedOn desc`. |
| `$top` | Maximum number of records to return. |
| `$skip` | Number of records to skip (paging). |
| `collection` | Restrict the query to a collection, e.g. `my` = own records. |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
