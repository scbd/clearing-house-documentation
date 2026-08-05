<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import law from "@/swagger/schemas/bch/law"
</script>

# Law / Regulation - Field Reference

The fields of the Law / Regulation record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `biosafetyLaw`.

<SchemaTable :schema="law" />
