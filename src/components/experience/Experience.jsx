import React from "react";
import "./Experience.scss";

function Experience() {
  return (
    <section id="experience">
      <h1 className="section-heading mb75px">
        <span>
          <i className="fas fa-briefcase"></i>
        </span>
        <span> Work Experience </span>
      </h1>
 
      <div className="timeline">
        <div className="timeline-box">
          <div className="timeline-container">
            <div className="timeline-logo">
              
            </div>
            <h3 className="experience-designation1 m0 m-blue">
              Java FullStack developer
            </h3>
            <h4 className="experience-company-name">Gully2Global Bangalore</h4>
            

            <p className="experience-description text-align-justify">
            During a 3-month Java Full Stack Developer internship, I actively contributed to front-end and back-end development projects. Proficient in HTML, CSS, and JavaScript for responsive UI design. Implemented server-side logic using Java and Spring Boot. Collaborated on database management tasks and participated in the deployment process. Demonstrated adaptability, problem-solving skills, and a commitment to learning.
            </p>
          </div>
        </div>

        <div className="timeline-box left">
          <div className="timeline-container">
            <div className="timeline-logo">
              
            </div>
            <h3 className="experience-designation1 m0 m-blue">
              FrontEnd developer
            </h3>
            <h4 className="experience-company-name">Jspiders Bangalore</h4>
           

            <p className="experience-description text-align-justify">
              {" "}
              Dynamic Front-End Developer intern with three months of hands-on experience. Demonstrated proficiency in HTML, CSS, and JavaScript, contributing to the development of user-friendly interfaces. Collaborated closely with cross-functional teams, honing skills in responsive design and troubleshooting. Eager to apply and expand my knowledge in a professional setting.
            </p>
          </div>
        </div>

        <div id="timeline-divider1">
          <div className="timeline-traveller">
            <div>
              <i className="fas fa-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
