<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import contact from "@/swagger/schemas/chm/contact"
</script>

# Contact - Field Reference

> **Draft** — fields pending review (REBUILD.md review gate).

The fields of the Contact record type as documented for the Clearing-House Mechanism. In API calls the record type is selected with the schema value `contact`.

<SchemaTable :schema="contact" />
