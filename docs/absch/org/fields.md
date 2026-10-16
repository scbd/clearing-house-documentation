<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import org from "@/swagger/schemas/abs/org"
</script>

# Organization - Field Reference

The fields of the Organization record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `organization`.

<SchemaTable :schema="org" />
