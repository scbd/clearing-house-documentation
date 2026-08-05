<script setup>
// Renders one legacy-flow topic: the legacy notice (for publishing-chain
// topics), the intro, and one playground block per operation. Driven entirely
// by the topic descriptor so the page files stay trivial.
import { computed } from "vue"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import LegacyNotice from "@/components/common/legacy-notice.vue"
import { generalSpec, generalTopicBySlug } from "@/swagger/generators/general"
import { useClearingHouse } from "@/utils/composables"

const props = defineProps({
  slug: { type: String, required: true }
})

const { apiUrl, realm } = useClearingHouse()
const topic = generalTopicBySlug(props.slug)

const blocks = computed(() =>
  topic.ops.map((op) => ({
    op,
    specs: [{ json: generalSpec({ apiUrl, realm, op }), protected: op.params.includes("Authorization") }]
  }))
)
</script>

<template>
  <LegacyNotice v-if="topic.legacy" />

  <p>{{ topic.intro }}</p>

  <template v-for="block in blocks" :key="block.op.key">
    <h2>{{ block.op.summary }}</h2>
    <p>
      <strong>{{ block.op.method.toUpperCase() }}</strong>
      <code>{{ block.op.path }}</code>
    </p>
    <SwaggerUI :swaggerSpecs="block.specs" />
  </template>
</template>
