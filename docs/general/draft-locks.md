<script setup>
import SwaggerUI from "../../swagger/view/SwaggerUI.vue"
import swaggerExistsJson from "../../swagger/json/general.draft-locks-exists.json";
import swaggerGetJson from "../../swagger/json/general.draft-locks-get.json";
import swaggerListJson from "../../swagger/json/general.draft-locks-list.json";
import swaggerLockJson from "../../swagger/json/general.draft-locks-lock.json";
import swaggerUnLockJson from "../../swagger/json/general.draft-locks-unlock.json";

const swaggerExistsSpecs = [
  { json: swaggerExistsJson, domId:"exists", protected:false },
];
const swaggerGetSpecs = [
  { json: swaggerGetJson, domId:"get", protected:false },
];
const swaggerListSpecs = [
  { json: swaggerListJson, domId:"list", protected:true },
];
const swaggerLockSpecs = [
  { json: swaggerLockJson, domId:"lock", protected:true },
];
const swaggerUnLockSpecs = [
  { json: swaggerUnLockJson, domId:"unlock", protected:true },
];
</script>

# Draft Locks

<!--@include: ../../components/general/draft-locks/exists.md-->

<!--@include: ../../components/general/draft-locks/get.md-->

<!--@include: ../../components/general/draft-locks/list.md-->

<!--@include: ../../components/general/draft-locks/lock.md-->

<!--@include: ../../components/general/draft-locks/unlock.md-->