<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar  from '../../components/partials/Navbar.vue'
import Home  from '../../components/Home.vue'
import Footer from '@/components/partials/Footer.vue';
</script>
<template>
  <Navbar/>
  <RouterView />
  <Footer/>
</template>