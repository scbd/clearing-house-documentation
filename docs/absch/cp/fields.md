<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import cp from "@/swagger/schemas/abs/cp"
</script>

# Checkpoint - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Checkpoint record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `absCheckpoint`.

<SchemaTable :schema="cp" />
