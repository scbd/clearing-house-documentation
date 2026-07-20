<template>
  <div>
    <table>
      <thead>
        <tr>
          <th><strong>Record Type</strong></th>
          <th><strong>Schema</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredRecords" :key="item.recordType">
          <td>{{ item.recordType }}</td>
          <td>
            <a :href="item.schemaUrl">{{ item.schemaName }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { recordTypes } from "@/routes";

const selectedFilter = ref("");

onMounted(() => {
  selectedFilter.value = window.location.pathname.split("/")[1];
});

const filteredRecords = computed(() => {
  return selectedFilter.value && recordTypes[selectedFilter.value].map((record)=>{
   
    return {
      recordType: record.text,
      schemaUrl: `/${selectedFilter.value}/${record.text.toLowerCase()}/schema`,
      schemaName: record.fullName
    }
  })
});
</script>
