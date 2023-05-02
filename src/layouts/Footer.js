import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: 1234 Cypress Ave</li>
          <li>Email: LittleLemon@gmail.com</li>
          <li>Phone: (123)456-7890
          </li>
        </ul>
      </nav>
      <nav>
        <h3>Opening times</h3>
        <ul>
          <li>Monday - Thursday: 9:00am - 9:00pm</li>
          <li>Friday - Saturday: 9:00am - 9:00pm</li>
          <li>Sunday: 9:00am - 10:00pm</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;