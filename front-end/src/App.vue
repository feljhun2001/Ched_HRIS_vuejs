<script setup>

</script>

<template>
  <div class="container" id="home">
    <nav> 
      <router-link to="/"></router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  #home {
    margin-top: 10px;
    max-width: 1900px;
  }
</style>
