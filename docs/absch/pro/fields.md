<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import pro from "@/swagger/schemas/abs/pro"
</script>

# ABS Procedure - Field Reference

The fields of the ABS Procedure record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `absProcedure`.

<SchemaTable :schema="pro" />
