<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import dec from "@/swagger/schemas/bch/dec"
</script>

# Decision - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Decision record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `biosafetyDecision`.

<SchemaTable :schema="dec" />
