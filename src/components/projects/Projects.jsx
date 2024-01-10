import React from "react";
import "./Projects.scss";

function Projects() {
  return (
    <section id="portfolio">
      <h1 class="section-heading mb75px">
        <span>
          <i class="fas fa-th-list"></i>
        </span>
        <span> Portfolio </span>
      </h1>

      <div id="portfolio-container">
        <div class="portfolio-image-container">
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
          <div class="portfolio-details">
            <p>
              PrazStudio is an ecommerce web application built using MERN Stack
            </p>
          </div>
        </div>
        <div class="portfolio-image-container">
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000026_1550237353_project_2.jpeg" />
          <div class="portfolio-details">
            <p>Employees_Review_System </p>
            <br />
            <p>
              A full stack app, in which the admin, can assign the employees, to
              review each other on the basic of there work. The admin has
              special power, to make any other employee as the new admin. Admin
              can also make the new employee, and they can also assing, the
              reviewer and revieweee. The admin can see the current employee,
              and according to the review, the admin can remove the employee.
              The review given to the employee, is always going to be store in
              the database.
            </p>
          </div>
        </div>
        <div class="portfolio-image-container">
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000029_1550237386_project.jpeg" />
          <div class="portfolio-details">
            <p>Ecommerce-API-Project-ExpressJs-MongoDB</p>

            <br />
            <p>Created an E-commerce API Project using NodeJS and MongoDB</p>
          </div>
        </div>
        <div class="portfolio-image-container">
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000027_1550237355_project_3.png" />
          <div class="portfolio-details">
            <p>OnTracker</p>
            <br />
            <p>
              It is a Habit Tracker app where we can track the habit of a person
              on weekly basis. which is built using Nodejs, Ejs , CSS,
              Javascript , Bootstrap.
            </p>
          </div>
        </div>
        <div class="portfolio-image-container">
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" />
          <div class="portfolio-details">
            <p>SuperHero-HunterApp</p>
            <br />
            <p>
              This is a superhero hunter project where you can search your
              favourite superheroes. It uses the official Marvel API.
            </p>
          </div>
        </div>
        <div class="portfolio-image-container">
          <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000028_1550237365_tree.jpeg" />
          <div class="portfolio-details">
            <p>Stopwatch</p>
            <br />
            <p>
              StopWatch. It is a Timer displayed at the top, along with three
              buttons - start, stop, and reset. It is Made using HTML5 CSS3 and
              JavaScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
