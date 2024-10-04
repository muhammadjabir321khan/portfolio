<script setup>
import { ref } from "vue";

// Reactive state to track whether the menu is open or not
const isMenuOpen = ref(false);
const isNavbarActive = ref(false); // Reactive state for navbar active status

// Function to toggle the menu and navbar state
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;  // Toggle the menu icon
  isNavbarActive.value = !isNavbarActive.value;  // Toggle the navbar active class
};

const handleLinkClick = () => {
  isMenuOpen.value = false;
  isNavbarActive.value = false;
};
</script>

<template>
  <header class="header">
    <a href="#" class="logo">M JABIR</a>
    
    <!-- Dynamic class for the menu icon, toggling between 'bx-menu' and 'bx-x' -->
    <div :class="['bx', isMenuOpen ? 'bx-x' : 'bx-menu']" id="menu-icon" @click="toggleMenu"></div>
    
    <!-- Dynamic class for the navbar, adding 'active' when isNavbarActive is true -->
    <nav :class="['navbar', isNavbarActive ? 'active' : '']">
      <!-- Ensure clicking each link calls the handleLinkClick function -->
      <router-link to="/home" exact-active-class="active" @click="handleLinkClick">Home</router-link>
      <router-link to="/about" exact-active-class="active" @click="handleLinkClick">About</router-link>
      <router-link to="/education" exact-active-class="active" @click="handleLinkClick">Education</router-link>
      <router-link to="/skills" exact-active-class="active" @click="handleLinkClick">Skills</router-link>
      <router-link to="/projects" exact-active-class="active" @click="handleLinkClick">Projects</router-link>
      <router-link to="/contact" exact-active-class="active" @click="handleLinkClick">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>

</style>
