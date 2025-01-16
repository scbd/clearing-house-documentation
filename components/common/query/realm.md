The request must include the following query parameters:

| Field          | Type   | Description                        |
| -------------- | ------ | ---------------------------------- |
| Realm          | String | Defines the specific context or domain within which the Clearing-House request is being made. This header determines the environment or operational scope for the request. Allowed values include `abs` (Access and Benefit-sharing Clearing-House), `chm` (Central Clearing-House Mechanism), and `bch` (Biosafety Clearing-House). Each value represents a different area of functionality or service. |

**Realm Values:**

<table>
    <thead>
        <tr>
            <th>Applications</th>
            <th>Development Realm</th>
            <th>Production Realm</th>
        </tr>
    </thead>
    <tbody>
        <!--@include: @/../components/common/realm/abs.md-->
        <!--@include: @/../components/common/realm/bch.md-->
        <!--@include: @/../components/common/realm/chm.md-->
    </tbody>
</table>