<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.permit.permit-keywords.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Permit - Permit Keywords (Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent)

## Endpoint

The endpoint for retrieving the keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent.

**GET** `/api/v2013/thesaurus/domains/1A22EAAB-9BBC-4543-890E-DEF913F59E98/terms`

<!--@include: ../../../components/common/header-content.md-->

## Usages

This table describes the keywords field that is used to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent.

| Title            | Field   | Schema                    |
| ---------------- | ------ | ------------------------------ |
| Keywords to describe the subject-matter or genetic resource(s) covered by the permit or its equivalent           | keywords &nbsp; &nbsp; | <a href="/ircc/published/create">IRCC - create</a>  |




## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />