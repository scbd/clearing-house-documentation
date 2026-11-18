<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import news from "@/swagger/schemas/bch/news"
</script>

# Biosafety News - Field Reference

The fields of the Biosafety News record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `biosafetyNews`.

<SchemaTable :schema="news" />
