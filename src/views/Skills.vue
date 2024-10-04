
<script setup>
import { ref } from 'vue';

const skills = ref([
  {
    title: 'HTML',
    icon: 'fab fa-html5',
    description: 'Expert in HTML5 for creating structured and semantic web content.'
  },
  {
    title: 'CSS',
    icon: 'fab fa-css3-alt',
    description: 'Proficient in CSS3 for styling and layout design with responsive techniques.'
  },
  {
    title: 'JavaScript',
    icon: 'fab fa-js',
    description: 'Experienced in JavaScript for interactive and dynamic web functionalities.'
  },
  {
    title: 'Bootstrap',
    icon: 'fab fa-bootstrap',
    description: 'Experienced in Bootstrap for responsive and mobile-first web design.'
  },
  {
    title: 'Vue.js',
    icon: 'fab fa-vuejs',
    description: 'Skilled in Vue.js for building reactive and component-based user interfaces.'
  },
  {
    title: 'PHP',
    icon: 'fab fa-php',
    description: 'Experienced in PHP for server-side scripting and web application development.'
  },
  {
    title: 'Laravel',
    icon: 'fab fa-laravel',
    description: 'Knowledgeable in Laravel for robust backend development and API integration.'
  },
  {
    title: 'Unit Testing',
    icon: 'fas fa-vial',
    description: 'Proficient in writing unit tests for reliable and maintainable code.'
  },
  {
    title: 'Git',
    icon: 'fab fa-git',
    description: 'Proficient in using Git for version control and collaborative development.'
  },
  {
    title: 'Windows',
    icon: 'fab fa-windows',
    description: 'Experienced with Windows OS for development and deployment environments.'
  },
  {
    title: 'Linux',
    icon: 'fab fa-linux',
    description: 'Skilled in Linux for server management and development environments.'
  },
  {
    title: 'Stripe',
    icon: 'fab fa-stripe',
    description: 'Experienced with Stripe for integrating payment processing solutions into applications.'
  },
  {
    title: 'Docker',
    icon: 'fab fa-docker',
    description: 'Proficient in Docker for containerizing applications and managing development environments.'
  },
  {
    title: 'Tailwind CSS',
    icon: 'bx bxl-tailwind-css',
    description: 'Experienced with Tailwind CSS for designing responsive and modern user interfaces.'
  }
]);
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="diamond-cube-container">
        <div class="diamond-cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face right"></div>
          <div class="cube-face left"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </div>
      <h2>My Skills</h2>
      <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.title" class="skill">
        <div class="skill-icon"><i :class="skill.icon"></i></div>
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
</style>
