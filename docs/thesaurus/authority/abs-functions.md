<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/authority/abs-functions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Authority - ABS Functions

## Overview

This endpoint retrieves a list of functions related to Access and Benefit Sharing (ABS) under the Convention on Biological Diversity (CBD). These functions are essential for understanding and documenting the roles and responsibilities associated with ABS agreements and practices. This endpoint helps in accessing standardized terms that define various ABS functions, which can be utilized for compliance, reporting, and management purposes.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/8102E184-E282-47F7-A49F-4C219B0EE235/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />