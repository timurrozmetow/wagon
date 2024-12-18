// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import AboutSection from "./components/AboutSection";
import PowerSection from "./components/PowerSection";
import "./App.css";
import WagonsPage from "./components/WagonsPage";
import CertificatesCarousel from "./components/CertificatesCarousel";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomeCarousel />
      </section>
      <AboutSection />
      <PowerSection />
      <WagonsPage/>
      <CertificatesCarousel />
      <section id="contact" className="section">
        Contact Section
      </section>
      <Footer />
    </>
  );
}

export default App;
