<script setup>
// Info bar shown at the bottom of v2023 create/update pages, pointing existing
// v2013 integrators at the legacy Save Draft endpoint and the active document
// operations. Links resolve within the current clearing house.
import { useClearingHouse } from "@/utils/composables"

const { clearingHouseBase } = useClearingHouse()
</script>

<template>
  <div class="alert alert-info" role="note">
    <strong>Legacy alternative.</strong>
    Publishing through the legacy v2013 API uses the
    <a :href="clearingHouseBase('/general/save-draft')">Save Draft</a>
    endpoint plus a workflow call; new integrations should use this single v2023
    call instead. The record's other draft operations (drafts, locks,
    securities, validation, versions) are documented under
    <a :href="clearingHouseBase('/general/drafts')">Draft Operations</a>.
  </div>
</template>
