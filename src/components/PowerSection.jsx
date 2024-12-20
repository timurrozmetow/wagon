import React from "react";
import CountUp from "react-countup";
import "./PowerSection.css";
import { FaCogs, FaTrain, FaIndustry, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const PowerSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const stats = [
    { icon: <FaCogs />, end: 70000, label: t("power1") },
    { icon: <FaTrain />, end: 22700, label: t("power2") },
    { icon: <FaIndustry />, end: 63300, label: t("power3") },
    { icon: <FaUsers />, end: 1500, label: t("power4") },
  ];

  return (
    <section id="power" className="power-section">
      <div className="power-container">
        <h2>{t("power")}</h2>
        <div className="power-stats">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <CountUp end={stat.end} duration={3} className="stat-number" />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
