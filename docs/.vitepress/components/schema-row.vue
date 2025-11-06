<template>
  <tr>
    <!-- Title -->
    <td>
      <strong v-if="title">
        <template v-if="titleLink">
          <a :href="clearingHouseBase(titleLink)">{{ title }}</a>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </strong>
    </td>

    <!-- Field -->
    <td>{{ field }}</td>

    <!-- Mandatory -->
    <td>{{ mandatory ? 'True' : '' }}</td>

    <!-- Type -->
    <td>
      <slot name="type">
        <template v-if="type">
          <a :href="clearingHouseBase(`/custom-types.html#${type}`)">
            {{ type }}
          </a>
        </template>
        <template v-else>—</template>
      </slot>
    </td>

    <!-- Example -->
    <td>
      <slot name="example">
        <code>{{ computedExample }}</code>
      </slot>
    </td>
  </tr>
</template>

<script setup>
import { useClearingHouse } from "@/utils/composables"
import { computed } from "vue"

const { clearingHouseBase } = useClearingHouse()

const props = defineProps({
  title: String,
  titleLink: String,
  field: String,
  type: String,
  example: [String, Object],
  mandatory: Boolean,
})

/**
 * Computes a default example value based on the field type.
 * If a custom example prop is provided, it takes precedence.
 */
const computedExample = computed(() => {
  if (props.example) return props.example

  const type = props.type?.toLowerCase()
  switch (type) {
    case 'string': return 'example string'
    case 'lstring': return '{ "en": "example string" }'
    case 'boolean': return 'true'
    case 'eterm': return '{ "identifier": "86D464C3-B5BB-4B02-85E4-1AAD8D64CD27" }'
    case 'eterm[]': return '[ { "identifier": "86D464C3-B5BB-4B02-85E4-1AAD8D64CD27" } ]'
    case 'reference': return '{ "identifier": "C84C7E6C-134C-F1B1-9A3B-B7443F135239@2" }'
    case 'reference[]': return '[ { "identifier": "C84C7E6C-134C-F1B1-9A3B-B7443F135239@2" } ]'
    case 'datetime': return '2025-10-10'
    case 'elink[]': return '[ { "url": "https://example.com", "name": "Document" } ]'
    case 'elink': return '{ "url": "https://example.com", "name": "Document" }'
    case 'number': return '123'

    default: return ''
  }
})
</script>
