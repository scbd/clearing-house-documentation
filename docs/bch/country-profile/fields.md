<script setup>
import SchemaTable from "@/components/common/schema-table.vue"
import countryProfile from "@/swagger/schemas/bch/country-profile"
</script>

# Country Profile - Field Reference

The fields of the Country Profile record type as documented for the Biosafety Clearing-House. In API calls the record type is selected with the schema value `countryProfile`.

<SchemaTable :schema="countryProfile" />
