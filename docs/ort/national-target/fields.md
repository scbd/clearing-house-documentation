<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nationalTarget from "@/swagger/schemas/ort/national-target"
</script>

# National Target - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the National Target record type as documented for the Online Reporting Tool. In API calls the record type is selected with the schema value `nationalTarget7`.

<SchemaTable :schema="nationalTarget" />
