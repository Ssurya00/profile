import React from "react";
import "./Skills.scss";
import { FaChalkboardUser } from "react-icons/fa6";
import "https://kit.fontawesome.com/b3348ae33f.js";

function Skills() {
  return (
    <div>
      <section id="skills" style={{ backgroundColor: "#9e9b9b29" }}>
        <h1 className="section-heading mb75px">
          <span>
            <FaChalkboardUser />
          </span>
          <span> SKILLS </span>
        </h1>

        <div className="skills-display">
          <div className="skill-progress">
            <div className="seventy-percent mb-blue">
              <div className="skill-name">
                <span> Java </span>
              </div>
            </div>
          </div>
          <div className="skill-progress">
            <div className="seventy-percent mb-chocalate  ">
              <div className="skill-name">
                <span> Javascript </span>
              </div>
            </div>
          </div>

          <div className="skill-progress">
            <div className="fifty-percent mb-blue">
              <div className="skill-name">
                <span> SQL </span>
              </div>
            </div>
          </div>

          <div className="skill-progress">
            <div className="eighty-five-percent mb-orange">
              <div className="skill-name">
                <span> HTML </span>
              </div>
            </div>
          </div>

          <div className="skill-progress">
            <div className="seventy-percent mb-green">
              <div className="skill-name">
                <span> CSS </span>
              </div>
            </div>
          </div>

          <div className="skill-progress">
            <div className="eighty-percent mb-orange">
              <div className="skill-name">
                <span> SpringBoot </span>
              </div>
            </div>
          </div>

          <div className="skill-progress">
            <div className="sixty-percent mb-green">
              <div className="skill-name">
                <span> Hibernate </span>
              </div>
            </div>
          </div>

          <div className="skill-progress">
            <div className="eighty-percent mb-chocalate">
              <div className="skill-name">
                <span> Git/Github</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
