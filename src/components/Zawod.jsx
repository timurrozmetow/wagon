import React from "react";
import { motion } from "framer-motion";
import "./Zawod.css";
import { useTranslation } from "react-i18next";

const Zawod = () => {
  const { t } = useTranslation();

  return (
    <section className="partnership-page1">
      <div className="partnership-container1">
        <div className="partnership-content1">
        <motion.h1
        className="partnership-title1"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>{t("AboutFactory")}</h1>
      </motion.h1>
      
        <motion.p
          className="partnership-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("AboutFactoryText")}
        </motion.p>
        </div>
        <div className="partnership-images1">
          <img
            src="/banner/7.webp"
            alt="Эксклюзивное партнерство"
            className="partnership-images1"
          />
        </div>
      </div>
    </section>
  );
};

export default Zawod; 