<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import msr from "@/swagger/schemas/abs/msr"
</script>

# Measure - Field Reference

The fields of the Measure record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `measure`.

<SchemaTable :schema="msr" />
