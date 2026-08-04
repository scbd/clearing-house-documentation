<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import cdi from "@/swagger/schemas/bch/cdi"
</script>

# Capacity Development Initiative - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Capacity Development Initiative record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `capacityBuildingInitiative`.

<SchemaTable :schema="cdi" />
