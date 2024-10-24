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

### Biosafety Clearing-House (BCH)
The Biosafety Clearing-House (BCH) is an international exchange platform for biosafety information. It facilitates the implementation of the Cartagena Protocol on Biosafety and provides access to resources and information related to the safe transfer, handling, and use of living modified organisms.

### Access and Benefit-Sharing Clearing-House (ABSCH)
The Access and Benefit-Sharing Clearing-House (ABSCH) is a platform that supports the Nagoya Protocol. It provides access to information about the fair and equitable sharing of benefits arising from the utilization of genetic resources.

### Clearing-House Mechanism (CHM)
The Clearing-House Mechanism (CHM) is designed to promote technical and scientific cooperation and to provide access to data and information relevant to the implementation of the Convention on Biological Diversity.

<script setup>
import ClearingHouseSelector from "@/components/home/clearing-house-selector.vue"
</script>
