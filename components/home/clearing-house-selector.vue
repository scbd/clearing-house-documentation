<template>
  <div class="my-5 text-center">
    <h2 class="mb-4">Explore Our Clearing-Houses</h2>
    
    <div class="row d-flex justify-content-center">
      <!-- BCH Clearing House -->
      <a href="/bch/" class="col-sm-6 col-md-3 box box-orange text-center text-decoration-none mb-3 mb-md-0">
        <p>Biosafety Clearing-House (BCH)</p>
      </a>

      <!-- ABSCH Clearing House -->
      <a href="/abs/" class="col-sm-6 col-md-3 box mx-5 box-green text-center text-decoration-none mb-3 mb-md-0">
        <p>Access and Benefit-Sharing Clearing-House (ABSCH)</p>
      </a>      

      <!-- CHM Clearing House -->
      <a href="/chm/" class="col-sm-6 col-md-3 box box-orange text-center text-decoration-none mb-3 mb-md-0">
        <p>Clearing-House Mechanism (CHM)</p>
      </a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.box {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
}

.box-green{
  color: #1FA65D;
  border: 0.4rem solid #1FA65D;
}

.box-orange{
  color: #fa6938;
  border: 0.4rem solid #fa6938;
}

.box p {
  font-size: 1.2rem;
}

.box-green:hover {
  background: #1FA65D;
  color: white;
}

.box-orange:hover {
  background: #fa6938;
  color: white;
}
</style>
