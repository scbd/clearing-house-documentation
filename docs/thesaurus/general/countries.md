<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/general/countries.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# General - Countries

## Overview

This endpoint provides access to a list of country terms from the thesaurus. This endpoint is part of the API for querying and retrieving terms related to countries, which can be used in various applications such as form fields, dropdowns, or data validation. It returns a comprehensive list of country names and related information as defined in the thesaurus.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/countries/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Usages

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Country           | government | <a href="/ircc/create#request-body">IRCC - create</a>  |
| Country           | government | <a href="/contact/create#request-body">Contact - create</a>  |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />