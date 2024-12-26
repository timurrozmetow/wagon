import React from "react";
import "./AboutSection.css";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section id="about" className="about-section">
      <img className="img12" src="banner/1.webp" alt="logo" />
      <div className="about-container1">
        <h2>{t("aboutSec")}</h2>
        <p className="about-description1">
        {t("aboutSec1")}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
