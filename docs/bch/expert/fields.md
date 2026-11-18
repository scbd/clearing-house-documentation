<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import expert from "@/swagger/schemas/bch/expert"
</script>

# Biosafety Expert - Field Reference

The fields of the Biosafety Expert record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `biosafetyExpert`.

<SchemaTable :schema="expert" />
