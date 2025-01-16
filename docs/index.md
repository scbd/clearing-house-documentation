---
aside: false
---

# Welcome to the SCBD Clearing House API Documentation Portal

<img src="@/assets/CBD_logo_green.png" class="mb-4 img-fluid mt-5 mx-auto d-block" alt="CBD Clearing House Banner" />

## Introduction

Welcome to our API Documentation Portal, your go-to resource for understanding and interacting with our comprehensive suite of APIs. Our website provides detailed, interactive documentation for developers, technical teams, and stakeholders who need to integrate with and leverage our APIs effectively.

## Choose Your Clearing-House

Please select one of the following clearing-houses to get started with their respective APIs:

<ClearingHouseSelector />

---

## About the Clearing Houses

<!--@include: @/../components/about/bch.md-->
<!--@include: @/../components/about/abs.md-->
<!--@include: @/../components/about/chm.md-->
<!--@include: @/../components/about/ort.md-->

<script setup>
import ClearingHouseSelector from "@/components/home/clearing-house-selector.vue"
</script>
