<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import contact from "@/swagger/schemas/abs/contact"
</script>

# Contact - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Contact record type as documented for the ABS Clearing-House. In API calls the record type is selected with the schema value `contact`.

<SchemaTable :schema="contact" />
