<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import ndb from "@/swagger/schemas/abs/ndb"
</script>

# National Website or Database - Field Reference

The fields of the National Website or Database record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `database`.

<SchemaTable :schema="ndb" />
