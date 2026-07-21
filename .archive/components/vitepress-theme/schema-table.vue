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
        <td><code>
              {
                "identifier": "CB51626B-CF45-2AA0-3A24-459669DDCC34",
                "schema": "{{ schema }}",
                "languages": [
                  "en"
                ]
              }
            </code></td>
      </tr>
      <slot />
    </tbody>
  </table>
</template>
<script setup>
import { useClearingHouse } from "@/utils/composables"
const { clearingHouseBase } = useClearingHouse()

defineProps({
  schema: String,
})  
</script>
