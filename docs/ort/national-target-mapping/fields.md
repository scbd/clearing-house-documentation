<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nationalTargetMapping from "@/swagger/schemas/ort/national-target-mapping"
</script>

# National Target Mapping - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the National Target Mapping record type as documented for the Online Reporting Tool. In API calls the record type is selected with the schema value `nationalTarget7Mapping`.

<SchemaTable :schema="nationalTargetMapping" />
