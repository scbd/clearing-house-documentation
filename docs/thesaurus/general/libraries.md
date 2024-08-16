<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/general/libraries.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# General - Libraries

## Overview

This endpoint allows you to retrieve a list of terms related to CBD clearing houses from the thesaurus. This API endpoint is part of the system that provides standardized terminology used across various applications and systems. It is useful for applications that need to reference or display terms associated with CBD clearing houses in a consistent manner.


## Endpoint
**GET** `/api/v2013/thesaurus/domains/cbdClearingHouses/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />