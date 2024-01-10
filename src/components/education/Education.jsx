import React from "react";
import "./Education.scss";
import nvsImg from "../../assets/images/nvs.jpeg";
import sitImg from "../../assets/images/sitImg.jpeg";

function Education() {
  return (
    <section id="education">
      <h1 class="section-heading mb75px">
        <span>
          <i class="fas fa-graduation-cap"></i>
        </span>
        <span> Education </span>
      </h1>

      <div class="timeline">
        <div class="timeline-box left">
          <div class="timeline-container">
            <div class="timeline-logo1">
              
            </div>
            <h3 class="experience-designation m0 m-blue">
              Bachelor's Degree in Information Science And Engineering
            </h3>
            <h4 class="experience-company-name">
              PDA College Of Engineering, Gulbarga
            </h4>
            <h5 class="experience-duration m0">Aug, 2017 - July 2022</h5>
            <br />
           
          </div>
        </div>

        <div class="timeline-box right">
          <div class="timeline-container">
            <div class="timeline-logo1">
              
            </div>
            <h3 class="experience-designation m0 m-blue">
              Higher Secondary School
            </h3>
            <h4 class="experience-company-name">
              Jawahar Navodaya Vidayalaya, Narayanpur
            </h4>
            <h5 class="experience-duration m0">June 2015 - May 2017</h5>
            <br />
            
          </div>
        </div>

        <div id="timeline-divider">
          <div class="timeline-traveller">
            <div>
              <i class="fas fa-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
