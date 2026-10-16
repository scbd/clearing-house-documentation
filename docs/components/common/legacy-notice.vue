<script setup>
// Banner for the unlisted legacy v2013 publishing pages (ADR 0002).
import { useClearingHouse } from "@/utils/composables"

const { clearingHouseBase } = useClearingHouse()
</script>

<template>
  <div class="alert alert-warning" role="alert">
    <strong>Legacy documentation.</strong>
    This page describes the legacy v2013 multi-call publishing flow, kept for
    existing integrations. New integrations should use the v2023 endpoint,
    which performs the whole publishing workflow in a single call — see the
    Create and Update pages of your record type in the
    <a :href="clearingHouseBase('/')">documentation for this clearing house</a>.
  </div>
</template>
