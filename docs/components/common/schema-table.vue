<script setup>
import { withBase } from "vitepress"
import { useClearingHouse } from "@/utils/composables"

// Renders a schema descriptor's fields as the standard request-body table, so
// the table and the playground spec always describe the same schema.
const { clearingHouseBase } = useClearingHouse()

// Thesaurus vocabularies live in one global section (not per app); their links
// are absolute. Everything else is resolved within the current app.
const fieldLink = (link) =>
  link.startsWith('/thesaurus/') ? withBase(link) : clearingHouseBase(link)

defineProps({
  schema: { type: Object, required: true }
})

const TYPE_LINKS = {
  term: { label: 'Term', href: '/custom-types.html#term' },
  'term[]': { label: 'Term[]', href: '/custom-types.html#term' },
  reference: { label: 'Reference', href: '/custom-types.html#reference' },
  'reference[]': { label: 'Reference[]', href: '/custom-types.html#reference' },
  'link[]': { label: 'Link[]', href: '/custom-types.html#link' },
  mapLocation: { label: 'MapLocation', href: '/custom-types.html#maplocation' }
}

// Friendlier labels for scalar/composite types that don't link anywhere.
const TYPE_LABELS = {
  bool: 'Boolean', int: 'Integer', decimal: 'Decimal',
  datetime: 'DateTime', date: 'Date', object: 'Object', 'object[]': 'Object[]'
}

const formatExample = (example) =>
  typeof example === 'string' ? example : JSON.stringify(example)
</script>

<template>
  <table class="schema-table" style="table-layout: fixed; width: 100%;">
    <thead>
      <tr>
        <th style="width: 40%;">Title</th>
        <th style="width: 20%;">Field</th>
        <th style="width: 10%;">Mandatory</th>
        <th style="width: 10%;">Type</th>
        <th style="width: 20%;">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>header</td>
        <td></td>
        <td><a :href="clearingHouseBase('/custom-types.html#header')">Header</a></td>
        <td><code>{ "identifier": "068C83BA-995F-08C3-50CE-AD43545B3EB5", "schema": "{{ schema.schema }}", "languages": ["en"] }</code></td>
      </tr>
      <tr v-for="(field, name) in schema.fields" :key="name">
        <td>
          <strong>
            <a v-if="field.titleLink" :href="fieldLink(field.titleLink)">{{ field.title }}</a>
            <template v-else>{{ field.title }}</template>
          </strong>
        </td>
        <td>{{ name }}</td>
        <td>{{ field.mandatory ? 'True' : '' }}</td>
        <td>
          <a v-if="TYPE_LINKS[field.type]" :href="clearingHouseBase(TYPE_LINKS[field.type].href)">{{ TYPE_LINKS[field.type].label }}</a>
          <template v-else>{{ TYPE_LABELS[field.type] || field.type }}</template>
        </td>
        <td><code v-if="field.example !== undefined">{{ formatExample(field.example) }}</code></td>
      </tr>
    </tbody>
  </table>
</template>
