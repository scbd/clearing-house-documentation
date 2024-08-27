<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/authority/keywords.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
]
</script>

# Authority - Keywords

## Overview

This endpoint provides access to a list of standardized keywords used within the context of authority-related functions. These keywords are essential for categorizing and describing various aspects related to the management and documentation of authority functions under the Convention on Biological Diversity (CBD). This endpoint helps in obtaining a controlled vocabulary of keywords that can be used for reporting, data management, and compliance purposes.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />