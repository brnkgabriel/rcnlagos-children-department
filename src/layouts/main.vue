<template>
  <div>
    <Header />
    <main class="inner">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '~/components/partials/Header.vue';
import Footer from '~/components/partials/Footer.vue';

</script>