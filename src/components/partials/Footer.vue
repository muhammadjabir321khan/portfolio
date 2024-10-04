<template>
    <!-- <div class="footer-content">
        <h2>Get in Touch</h2>
        <p>Follow us on social media for the latest updates.</p>
        <ul class="social-links">
            <li><a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </div> -->
    <div class="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
</template>

<style scoped>
.footer {
    background-color: var(--second-bg-color);
    color: var(--text-color);
    padding: 20px;
    text-align: center;
}

.footer-content {
    margin-bottom: 20px;
}

.footer h2 {
    margin: 0 0 10px;
    font-size: 24px;
}

.footer p {
    margin: 0 0 10px;
    font-size: 16px;
}

.social-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

.social-links li {
    margin: 0 10px;
}

.social-links a {
    color: var(--main-color);
    font-size: 20px;
    transition: color 0.3s;
}

.social-links a:hover {
    color: #ffffff; /* Lighten on hover */
}

.footer-bottom {
    border-top: 1px solid var(--main-color);
    padding-top: 10px;
    font-size: 14px;
}

</style>