<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import ircc from "@/swagger/schemas/abs/ircc"
</script>

# Internationally Recognized Certificate of Compliance - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Internationally Recognized Certificate of Compliance record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `absPermit`.

<SchemaTable :schema="ircc" />
