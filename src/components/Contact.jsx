import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="about-section1">
      <img className="img2" src="banner/2.webp" alt="logo" />
      <div className="about-container">
            <div className="contact-container">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("ContactUs")}
      </motion.h2>
      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {t("ContactTagline")}
      </motion.p>
      <div className="contact-grid">
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhoneAlt className="contact-icon" />
          <p className="contact-detail">+ 971 509724457</p>
        </motion.div>
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="contact-icon" />
          <p className="contact-detail">info@grand-millennium.ae</p>
          <p className="contact-detail">sales@grand-millennium.ae</p>
        </motion.div>
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt className="contact-icon" />
          <p className="contact-detail">
            {t("AddressDetails")}
          </p>
        </motion.div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Contact;
