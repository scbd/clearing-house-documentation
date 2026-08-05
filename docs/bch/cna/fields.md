<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import cna from "@/swagger/schemas/bch/cna"
</script>

# Competent National Authority - Field Reference

The fields of the Competent National Authority record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `authority`.

<SchemaTable :schema="cna" />
