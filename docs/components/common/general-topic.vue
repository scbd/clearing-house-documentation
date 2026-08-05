<script setup>
// Renders one legacy-flow topic: the legacy notice (for publishing-chain
// topics), the intro, and one playground block per operation. Driven entirely
// by the topic descriptor so the page files stay trivial.
import { computed } from "vue"
import SwaggerUI from "@/swagger/view/SwaggerUI.vue"
import LegacyNotice from "@/components/common/legacy-notice.vue"
import { generalSpec, generalTopics, generalTopicBySlug } from "@/swagger/generators/general"
import { useClearingHouse } from "@/utils/composables"

const props = defineProps({
  slug: { type: String, required: true }
})

const { apiUrl, realm, clearingHouseBase } = useClearingHouse()
const topic = generalTopicBySlug(props.slug)

// The v2013 publishing chain, so every legacy page links to the others (they
// are unlisted — this is how the whole reference is navigable, ADR 0002).
const chain = generalTopics
  .filter((t) => t.legacy)
  .map((t) => ({ title: t.title, link: clearingHouseBase(`/general/${t.slug}`), current: t.slug === props.slug }))

const blocks = computed(() =>
  topic.ops.map((op) => ({
    op,
    specs: [{ json: generalSpec({ apiUrl, realm, op }), protected: op.params.includes("Authorization") }]
  }))
)
</script>

<template>
  <LegacyNotice v-if="topic.legacy" />

  <nav v-if="topic.legacy" class="legacy-flow-nav">
    <strong>Legacy publishing flow:</strong>
    <template v-for="(step, i) in chain" :key="step.link">
      <span v-if="i > 0"> · </span>
      <span v-if="step.current"><strong>{{ step.title }}</strong></span>
      <a v-else :href="step.link">{{ step.title }}</a>
    </template>
  </nav>

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
