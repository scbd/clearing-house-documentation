<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import org from "@/swagger/schemas/chm/org"
</script>

# Organization - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Organization record type as documented for the Clearing-House Mechanism. In API calls the record type is selected with the schema value `organization`.

<SchemaTable :schema="org" />
