<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerCanCreateJson from "@/swagger/json/general/draft-securities/can-create.json";
import swaggerCanDeleteJson from "@/swagger/json/general/draft-securities/can-delete.json";
import swaggerCanUpdateJson from "@/swagger/json/general/draft-securities/can-update.json";

const swaggerCanCreateSpecs = [
  { json: swaggerCanCreateJson, domId:"canCreate", protected:true },
];
const swaggerCanDeleteSpecs = [
  { json: swaggerCanCreateJson, domId:"canDelete", protected:true },
];
const swaggerCanUpdateSpecs = [
  { json: swaggerCanUpdateJson, domId:"canUpdate", protected:true },
];
</script>

# Draft Securities

<!--@include: @/../components/general/draft-securities/can-create.md-->

<!--@include: @/../components/general/draft-securities/can-delete.md-->

<!--@include: @/../components/general/draft-securities/can-update.md-->