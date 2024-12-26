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
        <h1>Grand Millennium FZCO</h1>
                <p className="w50">{t("welcome")}
           <strong> Grand Millennium FZCO</strong> – {t("welcome1")}
        </p>
      </div>
    </div>
  );
};

export default HomeCarousel;
