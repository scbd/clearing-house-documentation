<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import gene from "@/swagger/schemas/bch/gene"
</script>

# Gene / DNA Sequence - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Gene / DNA Sequence record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `dnaSequence`.

<SchemaTable :schema="gene" />
