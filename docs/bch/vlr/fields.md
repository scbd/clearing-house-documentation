<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import vlr from "@/swagger/schemas/bch/vlr"
</script>

# Virtual Library Resource - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Virtual Library Resource record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `resource`.

<SchemaTable :schema="vlr" />
