import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img className="ImgLogo" src="logo/q.webp" alt="logo" />
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

 <a href="#about" className="nav-link">About</a>
  <a href="#capacity" className="nav-link">Capacity</a>
  <a href="#railways" className="nav-link">Wagon</a>
  <a href="#services" className="nav-link">Certificates</a>
  <a href="#contact" className="nav-link">Contact</a>
        
      </div>
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
