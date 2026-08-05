<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nationalReport from "@/swagger/schemas/ort/national-report"
</script>

# National Report - Field Reference

The fields of the National Report record type as documented for the Online Reporting Tool. In API calls the record type is selected with the schema value `nationalReport7`.

<SchemaTable :schema="nationalReport" />
