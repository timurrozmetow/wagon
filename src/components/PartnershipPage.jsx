import React from "react";
import "./PartnershipPage.css";
import { useTranslation } from "react-i18next";

const PartnershipPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="partnership-page">
      <div className="partnership-container">
        <div className="partnership-content">
          <h1 className="partnership-title"> {t("partnership")}</h1>
          <p className="partnership-text">
          {t("partnership1")}
          </p>
          <p className="partnership-text">
          {t("partnership2")}
          </p>
        </div>
        <div className="partnership-image-container">
          <img
            src="/images/partnership.webp"
            alt="Эксклюзивное партнерство"
            className="partnership-image"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipPage;
