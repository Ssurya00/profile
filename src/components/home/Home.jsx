import React from "react";
import "./Home.scss";
import profileImg from "../../assets/images/profile.jpg";
import Navbar from "../navbar/Navbar";
import About from "../about/About";

function Home() {
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <About />
      </div>

      <div className="section">
        <div className="img-container">
          <img src={profileImg} alt="profile Image" />
        </div>
        <div className="description-container">
        Experienced Java Full Stack Developer proficient in front-end (HTML, CSS, JavaScript) 
        and back-end (Java, Spring Boot) technologies. Skilled in database management, RESTful 
        API design, and deployment processes. Adept at collaborating in cross-functional teams, 
        with a strong commitment to delivering high-quality, scalable solutions.
        </div>
      </div>
    </div>
  );
}

export default Home;
