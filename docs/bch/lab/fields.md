<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import lab from "@/swagger/schemas/bch/lab"
</script>

# Laboratory Detection - Field Reference

The fields of the Laboratory Detection record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `laboratoryDetection`.

<SchemaTable :schema="lab" />
