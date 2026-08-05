<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import cdi from "@/swagger/schemas/chm/cdi"
</script>

# Capacity Development Initiative - Field Reference

The fields of the Capacity Development Initiative record type as documented for the Clearing-House Mechanism. In API calls the record type is selected with the schema value `capacityBuildingInitiative`.

<SchemaTable :schema="cdi" />
