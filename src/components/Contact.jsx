import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="about-section1">
      <img className="img2" src="banner/2.webp" alt="logo" />
      <div className="about-container">
        <h2>Contact</h2>
        <p className="about-description">
          The Andijan Mechanical Plant is a leading manufacturer and repair 
          enterprise in Uzbekistan. It specializes in a wide range of 
          railway equipment for a 1520 mm gauge, including freight wagons, 
          tanks, and other specialized wagons for the region and CIS countries.
        </p>
        <p className="about-highlights">
          Our plant is equipped with state-of-the-art facilities to ensure 
          top-notch production and repair services, meeting the needs of 
          modern railway systems.
        </p>
      </div>
    </section>
  );
};

export default Contact;
