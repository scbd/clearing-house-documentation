---
aside: false
pageClass: wide-page
---

<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import suppAuth from "@/swagger/schemas/bch/supp-auth"
</script>

# Supplementary Authority - Field Reference

The fields of the Supplementary Authority record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `supplementaryAuthority`.

<SchemaTable :schema="suppAuth" />
