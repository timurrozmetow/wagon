import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section id="contact" className="about-section1">
      <img className="img2" src="banner/2.webp" alt="logo" />
      <div className="about-container">
        <h2>{t("contact")}</h2>
        <p className="about-description">
        {t("contact1")}
        </p>
        <p className="about-highlights">
        {t("contact2")}
        </p>
      </div>
    </section>
  );
};

export default Contact;
