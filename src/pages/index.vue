<template>
  <Home />
</template>
<script setup lang="ts">
import Home from '~/components/pages/Home.vue';


definePageMeta({
  layout: "main"
})

useHead(head({
  name: "Home | RCN Lagos Children Department"
}))
</script>