// src/components/AboutSection.jsx
import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Us</h2>
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

export default AboutSection;
