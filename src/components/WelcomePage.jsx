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
        <h1>{t("home")}  <br />{t("home1")} </h1>
        
      </motion.div>
      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >

      </motion.div>
    </div>
  );
};

export default WelcomePage;
