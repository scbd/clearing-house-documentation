<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import contact from "@/swagger/schemas/bch/contact"
</script>

# Contact - Field Reference

The fields of the Contact record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `contact`.

<SchemaTable :schema="contact" />
