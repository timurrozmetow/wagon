// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import AboutSection from "./components/AboutSection";
import PowerSection from "./components/PowerSection";
import "./App.css";
import WagonsPage from "./components/WagonsPage";
import CertificatesCarousel from "./components/CertificatesCarousel";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WelcomePage from "./components/WelcomePage";
import ServicesPage from "./components/ServicesPage";
import PartnershipPage from "./components/PartnershipPage";
import Zawod from "./components/Zawod";

function App() {
  return (
    <>
      <Navbar />
      
      <section id="home">
        <HomeCarousel />
      </section>
      <WelcomePage />
      
      <AboutSection />
      
      <section id="capacity">
      <PowerSection />
      </section>
      
      <PartnershipPage />
      <ServicesPage />
      <Zawod />
<section id="railways">
<WagonsPage/>
</section>



      
      <section id="services">
      <CertificatesCarousel />
        
      </section>
      <Contact/>

      <Footer />
    </>
  );
}

export default App;
