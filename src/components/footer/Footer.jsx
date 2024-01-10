import React from "react";
import "./Footer.scss";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <section id="contact">
      <h1 class="section-heading mb50px">
        <span>
          <i class="far fa-address-card"></i>
        </span>
        <span> Contact </span>
      </h1>
      <div id="contact-container">
        <div id="contact-form-container">
          <form id="contact-form">
            <input
              id="input-name"
              name="name"
              type="text"
              placeholder="Your Name"
            />
            <input
              id="input-email"
              name="input-email"
              type="text"
              required
              placeholder="Your Email"
            />
            <textarea
              id="input-message"
              name="input-message"
              rows="2"
              cols="40"
              placeholder="Message"
            ></textarea>
            <button class="sub-btn" type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div id="my-details-container">
          <h3>Get In touch</h3>
          <p>
            I'd love to hear from you! Whether you have a question, feedback, or
            just want to say hello, use the below details to get in touch with
            me. I'll do my best to respond promptly.
          </p>

          <h3>My Address</h3>
          <div class="my-details-info-container">
            <FaMapMarkerAlt />
            <span>Bengaluru, India</span>
          </div>

          <div class="my-details-info-container">
            <IoIosMail />
            <span>suryasinge@gmail.com</span>
          </div>
        </div>
      </div>

      <div class="text-center social-icons">
        <ul class="horizontal-list">
          <li>
            <a href="https://www.linkedin.com/in/suryakant-singe-623a5a168/">
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a href="https://github.com/Ssurya00" target="_blank">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div id="copyright">
        <p>
          © {new Date().getFullYear()}
          <strong> SuryakantSinge</strong>
        </p>
      </div>
    </section>
  );
}

export default Footer;
