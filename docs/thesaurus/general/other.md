<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/general/other.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>


# General - Other

## Overview

This endpoint provides access to specific terms within the thesaurus using a unique identifier. This endpoint is designed to retrieve detailed information about a particular term identified by its UUID (Universally Unique Identifier). It is particularly useful for fetching specific term details when the exact term is known and needs to be accessed or displayed in your application.


## Endpoint

**GET** `/api/v2013/thesaurus/terms/5B6177DD-5E5E-434E-8CB7-D63D67D5EBED`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />