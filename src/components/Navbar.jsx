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
        <img className="ImgLogo" src="/logo/q.webp" alt="logo" />
      </div>

      {/* Навигационные ссылки */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="about" smooth={true} duration={500} className="nav-link">
          About
        </Link>
        <Link to="services" smooth={true} duration={500} className="nav-link">
          Services
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link">
          Contact
        </Link>
      </div>

      {/* Хаббургер-меню */}
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
