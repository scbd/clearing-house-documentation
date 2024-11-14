<script setup>
import "@/style.css"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerJson from "@/swagger/json/thesaurus/biosafety-law/legislation-agreement-types.json";

const swaggerSpecs = [
  { json:swaggerJson, protected: false },
];
</script>

# Biosafety Law - Legislation Agreement Types

## Overview

This endpoint provides access to a curated list of terms related to various types of legislation and agreements as defined in the thesaurus. It allows users to retrieve structured information, including multilingual titles and metadata, on legal and agreement terms such as "Law." This can support applications in areas involving legal reference, regulatory compliance, or international agreements, enhancing accessibility to a wide range of legislative terminologies.


## Endpoint

**GET** `/api/v2013/thesaurus/domains/Legislation And Agreement Types/terms`

## Headers
<!--@include: @/../components/common/header/accept.md-->

## Playground

<SwaggerUI :swaggerSpecs="swaggerSpecs" />