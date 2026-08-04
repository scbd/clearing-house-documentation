<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import cpp from "@/swagger/schemas/abs/cpp"
</script>

# Community Protocol - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Community Protocol record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `communityProtocol`.

<SchemaTable :schema="cpp" />
