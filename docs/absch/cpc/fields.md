<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import cpc from "@/swagger/schemas/abs/cpc"
</script>

# Checkpoint Communique - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Checkpoint Communique record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `absCheckpointCommunique`.

<SchemaTable :schema="cpc" />
