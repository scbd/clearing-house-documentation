<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nbsap from "@/swagger/schemas/ort/nbsap"
</script>

# NBSAP - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the NBSAP record type as documented for the Online Reporting Tool. In API calls the record type is selected with the schema value `nbsap`.

<SchemaTable :schema="nbsap" />
