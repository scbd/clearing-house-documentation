<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import nmcc from "@/swagger/schemas/abs/nmcc"
</script>

# National Model Contractual Clause - Field Reference

The fields of the National Model Contractual Clause record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `absNationalModelContractualClause`.

<SchemaTable :schema="nmcc" />
