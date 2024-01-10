import React from "react";
import "./About.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <div className="container" id="about">
      <div className="profile-container">
        <div className="about-title">
          <h2>Suryakant Singe</h2>
        </div>
        <div className="icon-container">
          <ul className="follow ">
            <li className="hover-link">
              <a href="https://github.com/Ssurya00" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="hover-link">
              <a
                href="https://www.linkedin.com/in/suryakant-singe-623a5a168/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>

            <li className="hover-link">
              <a href="" target="_blank">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
