import React from "react";
import { motion } from "framer-motion";
import "./WelcomePage.css";
import { useTranslation } from "react-i18next";


const WelcomePage = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };


  return (
    <div className="welcome-container">
      <motion.div
        className="welcome-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Grand Millennium FZCO</h1>
      </motion.div>
      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <p>{t("welcome")}
           <strong> Grand Millennium FZCO</strong> – {t("welcome1")}
        </p>
      </motion.div>
      <motion.div
        className="welcome-button-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* <button className="welcome-button">Узнать больше</button> */}
      </motion.div>
    </div>
  );
};

export default WelcomePage;
