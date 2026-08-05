<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import ira from "@/swagger/schemas/bch/ira"
</script>

# Independent Risk Assessment - Field Reference

The fields of the Independent Risk Assessment record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `independentRiskAssessment`.

<SchemaTable :schema="ira" />
