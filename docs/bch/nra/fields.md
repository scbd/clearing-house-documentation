<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nra from "@/swagger/schemas/bch/nra"
</script>

# National Risk Assessment - Field Reference

The fields of the National Risk Assessment record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `nationalRiskAssessment`.

<SchemaTable :schema="nra" />
