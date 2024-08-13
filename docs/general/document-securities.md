<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerCreateJson from "../../swagger/json/general.document-securities-create.json";
import swaggerDeleteJson from "../../swagger/json/general.document-securities-delete.json";
import swaggerUpdateJson from "../../swagger/json/general.document-securities-update.json";

const swaggerCreateSpecs = [
  { json: swaggerCreateJson, protected: true, domId:"create" },
];
const swaggerDeleteSpecs = [
  { json: swaggerDeleteJson, protected: true, domId:"delete" },
];
const swaggerUpdateSpecs = [
  { json: swaggerUpdateJson, protected: true, domId:"update" },
];
</script>

# Document Securities

<!--@include: ../../components/general/document-securities/can-create.md-->

<!--@include: ../../components/general/document-securities/can-delete.md-->

<!--@include: ../../components/general/document-securities/can-update.md-->