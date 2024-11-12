<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/general/document-validations/validations.json";

const swaggerSpecs = [
  { json: swaggerJson, protected: true },
];
</script>

# Document Validations

## Overview

The "Document Validations" API endpoint is designed to validate documents. This endpoint allows clients to submit a document for validation based on a specified schema and optional parameters. It performs a series of checks to ensure that the document conforms to the required format and rules defined by the schema.

## Endpoint
**POST** `/api/v2013/documents/x/validate`

## Headers
<!--@include: @/../components/common/header/authorization-realm.md-->

## Query Parameters
<!--@include: @/../components/common/query/schema-metadata-government.md-->

## Validation Error
<!--@include: @/../components/common/validation-error.md-->

## Request Body


<table class="ircc__table" style="table-layout: fixed; width: 100%;">
  <thead>
    <tr>
      <th style="width: 40%;">Title</th>
      <th style="width: 20%;">Field</th>
      <th style="width: 10%;">Mandatory</th>
      <th style="width: 10%;">Type</th>
      <th style="width: 20%;">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>header</td>
      <td></td>
      <td><a href="/customTypes.html#eheader">Eheader</a></td>
      <td><code>
            {
              "identifier": "CB51626B-CF45-2AA0-3A24-459669DDCC34"
            }
          </code></td>
    </tr>
     <tr>
      <td><strong><a href="/abs/thesaurus/general/countries">Country</a></strong></td>
      <td>government</td>
      <td>True</td>
      <td><a href="/customTypes.html#eterm">Eterm</a></td>
      <td><code>{"identifier": "af"}</code></td>
    </tr>
    <tr>
      <td colspan="5" style="text-align: center; font-style: italic; background-color: #f9f9f9; padding: 1rem;">
        The values for the remaining fields are dependent on the specific schema that is selected. Detailed schema definitions for each record type can be found under their respective sections. These definitions provide the necessary structure and guidelines for the fields, ensuring that they align with the selected schema's requirements.
      </td>
    </tr>
  </tbody>
</table>

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />
