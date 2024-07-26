<script setup>
import "../../../style.css"
import SwaggerUI from "../../../swagger/view/SwaggerUI.vue"
import swaggerJson from "../../../swagger/json/thesaurus.authority.cpb-organism-types.json";
</script>

# Authority - CPB Organism Types

## Endpoint

**GET** `api.cbd.int/api/v2013/thesaurus/domains/TypeOfOrganisms/terms`

<!--@include: ../../../components/common/header-content.md-->


## Playground

<SwaggerUI :swaggerJson="swaggerJson" />