---
aside: false
pageClass: wide-page
---

<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import organism from "@/swagger/schemas/bch/organism"
</script>

# Organism - Field Reference

The fields of the Organism record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `organism`.

<SchemaTable :schema="organism" />
