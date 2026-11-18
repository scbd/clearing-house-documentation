---
aside: false
pageClass: wide-page
---

<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import submission from "@/swagger/schemas/bch/submission"
</script>

# Submission - Field Reference

The fields of the Submission record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `submission`.

<SchemaTable :schema="submission" />
