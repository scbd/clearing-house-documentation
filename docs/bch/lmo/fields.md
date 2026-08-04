<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import lmo from "@/swagger/schemas/bch/lmo"
</script>

# Living Modified Organism - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Living Modified Organism record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `modifiedOrganism`.

<SchemaTable :schema="lmo" />
