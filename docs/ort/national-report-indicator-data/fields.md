<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nationalReportIndicatorData from "@/swagger/schemas/ort/national-report-indicator-data"
</script>

# National Report Indicator Data - Field Reference

The fields of the National Report Indicator Data record type as documented for the Online Reporting Tool. In API calls the record type is selected with the schema value `nationalReport7IndicatorData`.

<SchemaTable :schema="nationalReportIndicatorData" />
