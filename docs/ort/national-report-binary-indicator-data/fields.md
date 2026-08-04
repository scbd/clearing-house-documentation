<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nationalReportBinaryIndicatorData from "@/swagger/schemas/ort/national-report-binary-indicator-data"
</script>

# National Report Binary Indicator Data - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the National Report Binary Indicator Data record type as documented for the Online Reporting Tool. In API calls the record type is selected with the schema value `nationalReport7BinaryIndicatorData`.

<SchemaTable :schema="nationalReportBinaryIndicatorData" />
