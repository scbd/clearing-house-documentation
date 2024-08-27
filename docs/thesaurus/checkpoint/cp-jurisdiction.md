<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/checkpoint/cp-jurisdiction.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Checkpoint - CP Jurisdiction

## Overview

This endpoint allows you to retrieve a list of terms associated with a specific jurisdiction within the thesaurus. This endpoint is useful for accessing jurisdiction-related terms identified by a unique domain identifier. It provides information about various jurisdictions, enabling applications to fetch and display relevant jurisdictional data.

## Endpoint

**GET** `/api/v2013/thesaurus/domains/D7BD5BDE-A6B9-4261-B788-16839CCC4F7E/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />