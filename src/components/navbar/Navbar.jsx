import React, { useState } from "react";
import "./Navbar.scss";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div className="container">
      <div className="nav-container">
        <div className="main-container">
          <ul className="list-items ">
            <li className="toggle" onClick={toggleMenu}>
              <IoMdMenu className="icon" />
            </li>
            <li className={`menu-items ${isOpen ? "isOpen" : ""}`}>
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
