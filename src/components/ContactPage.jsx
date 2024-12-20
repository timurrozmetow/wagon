import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactPage.css";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
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
          <h3 className="contact-method">{t("Phone")}</h3>
          <p className="contact-detail">+ 971 509724457</p>
        </motion.div>
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="contact-icon" />
          <h3 className="contact-method">{t("Email")}</h3>
          <p className="contact-detail">info@grand-millennium.ae</p>
          <p className="contact-detail">sales@grand-millennium.ae</p>
        </motion.div>
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt className="contact-icon" />
          <h3 className="contact-method">{t("Address")}</h3>
          <p className="contact-detail">
            {t("AddressDetails")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
