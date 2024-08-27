<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/authority/cpb-functions.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Authority - CBP Functions

## Overview

This endpoint provides access to a list of functions or roles related to the Convention on Biological Diversity (CBD) protocols and their implementation. This endpoint retrieves terms that classify different functions or responsibilities within the CBD framework, essential for understanding and managing various aspects of the Convention's application.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/Subject Areas/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />