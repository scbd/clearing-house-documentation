<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/authority/organization-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Organization Types

## Overview

This endpoint provides a list of terms related to different types of organizations. This endpoint allows users to retrieve a comprehensive set of terms that classify and categorize various organizations based on their type. This information can be used for data classification, filtering, and integration tasks where understanding the types of organizations is necessary.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/Organization%20Types/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />