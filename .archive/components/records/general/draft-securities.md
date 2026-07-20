<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerCanCreateJson from "@/swagger/json/general/draft-securities/can-create";
import swaggerCanDeleteJson from "@/swagger/json/general/draft-securities/can-delete";
import swaggerCanUpdateJson from "@/swagger/json/general/draft-securities/can-update";
import { useClearingHouse } from "@/utils/composables"

const swaggerCanCreateSpecs = [
  { json: swaggerCanCreateJson(useClearingHouse().apiUrl), domId:"canCreate", protected:true },
];
const swaggerCanDeleteSpecs = [
  { json: swaggerCanDeleteJson(useClearingHouse().apiUrl), domId:"canDelete", protected:true },
];
const swaggerCanUpdateSpecs = [
  { json: swaggerCanUpdateJson(useClearingHouse().apiUrl), domId:"canUpdate", protected:true },
];
</script>

# Draft Securities

<!--@include: @/../components/general/draft-securities/can-create.md-->

<!--@include: @/../components/general/draft-securities/can-delete.md-->

<!--@include: @/../components/general/draft-securities/can-update.md-->
