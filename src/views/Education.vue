<template>
<section class="education" id="education">
    <div class="container">
        <div class="heading">
            <h2>My <span>Education</span></h2>
        </div>
        <div class="education-cards">
            <!-- Existing Education Cards -->
            <div class="education-card">
                <div class="icon-box">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="education-content">
                    <h3>Master's Degree</h3>
                    <span>Abdul Wali Khan University Mardan (AWKUM)</span>
                    <p class="date">2018 - 2022</p>
                    <p>Master of Science in Computer Science. Graduated with honors.</p>
                </div>
            </div>
            <div class="education-card">
                <div class="icon-box">
                    <i class="fas fa-university"></i>
                </div>
                <div class="education-content">
                    <h3>Bachelor's Degree</h3>
                    <span>GDC Takht Bhai Mardan</span>
                    <p class="date">2015 - 2016</p>
                    <p>Bachelor of Technology in Information Technology. Dean's list for all semesters.</p>
                </div>
            </div>
            <div class="education-card">
                <div class="icon-box">
                    <i class="fas fa-school"></i>
                </div>
                <div class="education-content">
                    <h3>High School</h3>
                    <span>GHS Takht Bhai </span>
                    <p class="date">2010 - 2014</p>
                    <p>High School Diploma. Valedictorian of the graduating class.</p>
                </div>
            </div>

            <!-- New Education Cards -->
            <div class="education-card">
                <div class="icon-box">
                    <i class="fas fa-book-reader"></i>
                </div>
                <div class="education-content">
                    <h3>Middle School</h3>
                    <span>GHS Takht Bhai</span>
                    <p class="date">2010 - 2014</p>
                    <p>Graduated with honors. Active participant in various extracurricular activities.</p>
                </div>
            </div>
            <div class="education-card">
                <div class="icon-box">
                    <i class="fas fa-school"></i> <!-- Example: school icon -->
                </div>
                <div class="education-content">
                    <h3>Primary School</h3>
                    <span>GPS Takht Bhai </span>
                    <p class="date">2005 - 2009</p>
                    <p>Completed primary education with excellent grades. Involved in school events and activities.</p>
                </div>
            </div>
        </div>
    </div>
</section>




</template>

<style scoped>


@media (max-width:945px){
    .education-card {
    min-width: 64rem;
}
    
}
@media (max-width:575px){
    .education-card {
    min-width: 55rem;
}

}
@media (max-width:520px){
 .education .heading {
    font-size: 4rem;
  
}
.education-card {
    min-width: 52rem;
}

}
</style>




