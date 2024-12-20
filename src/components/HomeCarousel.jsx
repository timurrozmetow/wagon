import React from "react";
import "./HomeCarousel.css";
import { useTranslation } from "react-i18next";

const HomeCarousel = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="carousel">
      <div className="carousel-text">
        <h1>{t("home")}  <br />{t("home1")} </h1>
      </div>
    </div>
  );
};

export default HomeCarousel;
