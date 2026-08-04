<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nfp from "@/swagger/schemas/bch/nfp"
</script>

# National Focal Point - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the National Focal Point record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `focalPoint`.

<SchemaTable :schema="nfp" />
