<template>
     <section class="contact-section">
       <h2>Contact Me</h2>
       <div class="contact-icons">
         <a href="https://wa.me/3149974426" target="_blank" class="contact-icon">
           <i class="fab fa-whatsapp"></i>
         </a>
         <a href="mailto:jabirmuhammad126@gmail.com" target="_blank" class="contact-icon">
           <i class="fas fa-envelope"></i>
         </a>
         <a href="https://facebook.com/muhammadjibran.khan.357" target="_blank" class="contact-icon">
           <i class="fab fa-facebook"></i>
         </a>
         <a href="https://www.instagram.com/muhammadjibran.khan.357?igsh=YzljYTk1ODg3Zg==" target="_blank" class="contact-icon">
           <i class="fab fa-instagram"></i>
         </a>
         <a href="https://linkedin.com/in/muhammad-jabir-356169245" target="_blank" class="contact-icon">
           <i class="fab fa-linkedin"></i>
         </a>
       </div>
     </section>
   </template>
   
   <script setup>
     // No specific logic is required here
   </script>
   
   <style scoped>
 
   
   html, body {
     height: 100%;
     margin: 0;
   }
   
   .contact-section {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 100vh; /* Full height */
     background-color: var(--bg-color);
     text-align: center;
   }
   
   h2 {
     color: var(--main-color);
     font-size: 2rem;
     margin-bottom: 20px;
   }
   
   .contact-icons {
     display: flex;
     justify-content: center;
     gap: 20px;
   }
   
   .contact-icon {
     color: var(--text-color);
     font-size: 2rem;
     transition: color 0.3s ease;
   }
   
   .contact-icon:hover {
     color: var(--main-color);
   }
   </style>
   