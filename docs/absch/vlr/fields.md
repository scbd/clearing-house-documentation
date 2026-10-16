<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import vlr from "@/swagger/schemas/abs/vlr"
</script>

# Virtual Library Resource - Field Reference

The fields of the Virtual Library Resource record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `resource`.

<SchemaTable :schema="vlr" />
