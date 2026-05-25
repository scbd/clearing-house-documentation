<script setup>
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import swaggerExistsJson from "@/swagger/json/general/draft-locks/exists";
import swaggerGetJson from "@/swagger/json/general/draft-locks/get";
import swaggerListJson from "@/swagger/json/general/draft-locks/list";
import swaggerLockJson from "@/swagger/json/general/draft-locks/lock";
import swaggerUnLockJson from "@/swagger/json/general/draft-locks/unlock";
import { useClearingHouse } from "@/utils/composables"

const swaggerExistsSpecs = [
  { json: swaggerExistsJson(useClearingHouse().apiUrl), domId:"exists", protected:false },
];
const swaggerGetSpecs = [
  { json: swaggerGetJson(useClearingHouse().apiUrl), domId:"get", protected:false },
];
const swaggerListSpecs = [
  { json: swaggerListJson(useClearingHouse().apiUrl), domId:"list", protected:true },
];
const swaggerLockSpecs = [
  { json: swaggerLockJson(useClearingHouse().apiUrl), domId:"lock", protected:true },
];
const swaggerUnLockSpecs = [
  { json: swaggerUnLockJson(useClearingHouse().apiUrl), domId:"unlock", protected:true },
];
</script>

# Draft Locks

<!--@include: @/../components/general/draft-locks/exists.md-->

<!--@include: @/../components/general/draft-locks/get.md-->

<!--@include: @/../components/general/draft-locks/list.md-->

<!--@include: @/../components/general/draft-locks/lock.md-->

<!--@include: @/../components/general/draft-locks/unlock.md-->
