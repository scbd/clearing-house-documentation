<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus/permit/permit-keywords.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Permit - Permit Keywords (Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent)

## Overview

This endpoint provides access to a list of terms relevant to describing the subject-matter or genetic resources covered by a permit or its equivalent. This endpoint is useful for retrieving keywords that categorize and detail the scope of the permit, including the genetic resources or subject-matter it pertains to. The keywords can be used to annotate or classify permits, facilitating better management and retrieval of permit-related data.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms`

## Headers
<!--@include: ../../../components/common/header/accept.md-->

## Usages

This table describes the keywords field that is used to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent.

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent           | keywords &nbsp; &nbsp; | <a href="/ircc/published/create">IRCC - create</a>  |

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />