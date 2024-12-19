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
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomeCarousel />
      </section>
      <AboutSection />
      <section id="capacity">
      <PowerSection />
      </section>
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
