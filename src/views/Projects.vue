<script setup>
import { onMounted, ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Interapptive',
    image: 'https://media.istockphoto.com/id/1777876856/photo/digital-cart-icon-hologram-on-future-tech-background-online-shopping-evolution-futuristic.webp?b=1&s=170667a&w=0&k=20&c=5yltY4JJ1_3T__psr6xbT9QJ-ULwIYOkNTX49K7wPsQ=',
    description: 'A comprehensive e-commerce platform that allows multiple vendors to list and sell their products. Features include product management, order tracking, payment processing, and a robust admin panel for managing vendors and customers.',
    technologies: ['Vue.js', 'Laravel', 'PHP', 'Pinia', 'Vuetify'],
    url: 'https://redesign.interapptive.news/' // Replace with actual URL
  },
  {
    id: 2,
    title: 'Booksmaster',
    image: 'https://media.istockphoto.com/id/1410969602/photo/unrecognizable-asian-woman-using-smartphone-for-tap-to-pay.jpg?s=612x612&w=0&k=20&c=8i7YBiTjmrih_54DM-VLSuS9t4-lh2LYVccM3byja20=',
    description: 'POS Master is an advanced Point of Sale (POS) system designed to streamline retail operations by simplifying transaction processes and integrating with various hardware and software components. It offers real-time sales tracking, automated inventory updates, and customizable reporting. Ideal for both small businesses and large enterprises',
    technologies: ['Laravel', 'PHP', 'Html', 'Css', 'Bootstrap', 'javascript', 'jquery'],
    url: 'https://booksmaster.net' // URL for Booksmaster
  },
  {
    id: 3,
    title: 'Survey Rocks',
    image: 'https://media.istockphoto.com/id/1452586042/photo/survey.webp?b=1&s=170667a&w=0&k=20&c=jm0ODFwFoYd6cPMaxP15QoFnx14q_yjnkNzLV1ZGu8g=',
    description: 'Survey Rocks is an interactive survey platform built with PHP, Laravel, HTML, CSS, Bootstrap, JavaScript, and jQuery. It allows users to complete personalized surveys based on a series of questions. At the end of each survey, users receive product recommendations tailored to their responses.',
    technologies: ['Laravel', 'PHP', 'Html', 'Css', 'Bootstrap', 'javascript', 'jquery'],
    url: 'https://acc-accounts.surveyrocks.io/login' // Replace with actual URL
  },
  {
    id: 4,
    title: 'Thewebbuilders',
    image: 'https://media.istockphoto.com/id/1786111690/photo/human-resource-team-talking-to-a-candidate-during-a-job-interview-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=jNzDUvq7jdQSKQ7J7argOXw5fxilPhjQy24GVgag4SA=',
    description: 'Jobs Portal is a platform where admins can post job openings, and users can apply for these jobs. It features job posting management, application tracking, and user profiles. The platform facilitates the recruitment process by providing a seamless interface for both employers and job seekers.',
    technologies: ['Laravel', 'PHP', 'Html', 'Css', 'Bootstrap', 'javascript', 'jquery'],
    url: 'https://jobs.thewebbuilders.net/' // Replace with actual URL
  },
  {
    id: 5,
    title: 'Khalismunafa',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
    description: 'halismunafa is an advanced online investment platform designed to simplify and enhance the investment experience. It offers a range of investment options including stocks, bonds, and mutual funds, with real-time market data and analysis tools. ',
    technologies: ['Laravel', 'PHP', 'Html', 'Css', 'Bootstrap', 'javascript', 'jquery'],
    url: 'https://khalismunafa.com/' // Replace with actual URL
  },
]);

function onScroll() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}
onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll(); 
});
</script>

<template>
    <section id="projects">
      <div class="section-header">
        <h2>My Projects</h2> <!-- Add your heading here -->
      </div>
      <div class="projects-container">
        <a v-for="project in projects" :key="project.id" :href="project.url" class="project-card" rel="noopener noreferrer">
          <div class="project-card-inner">
            <div class="project-card-front">
              <div class="project-image">
                <img :src="project.image" :alt="project.title">
              </div>
            </div>
            <div class="project-card-back">
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <ul class="technologies">
                  <li v-for="tech in project.technologies" :key="tech" class="btn">{{ tech }}</li>
                </ul>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  </template>
  
  
  
 <style scoped>
</style>