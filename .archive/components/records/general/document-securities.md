<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerCreateJson from "@/swagger/json/general/document-securities/create";
import swaggerDeleteJson from "@/swagger/json/general/document-securities/delete";
import swaggerUpdateJson from "@/swagger/json/general/document-securities/update";
import { useClearingHouse } from "@/utils/composables"

const swaggerCreateSpecs = [
  { json: swaggerCreateJson(useClearingHouse().apiUrl), protected: true, domId:"create" },
];
const swaggerDeleteSpecs = [
  { json: swaggerDeleteJson(useClearingHouse().apiUrl), protected: true, domId:"delete" },
];
const swaggerUpdateSpecs = [
  { json: swaggerUpdateJson(useClearingHouse().apiUrl), protected: true, domId:"update" },
];
</script>

# Document Securities

<!--@include: @/../components/general/document-securities/can-create.md-->

<!--@include: @/../components/general/document-securities/can-delete.md-->

<!--@include: @/../components/general/document-securities/can-update.md-->
