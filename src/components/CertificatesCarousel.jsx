import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./CertificatesCarousel.css";
import { useTranslation } from "react-i18next";

const CertificatesCarousel = () => {
  const { t, i18n } = useTranslation();

  const certificates = [
    { id: 1, image: "cert/c1.webp", title: t("certificate1") },
    { id: 2, image: "cert/c2.webp", title: t("certificate2") },
    { id: 3, image: "cert/c3.webp", title: t("certificate3") },
  ];

  const controls = useAnimation();

  const startAnimation = (duration) => {
    const totalWidth = certificates.length * 300;
    controls.start({
      x: [0, -totalWidth],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startAnimation(certificates.length * 7);
  }, [certificates, controls]);

  return (
    <div className="mentors-section">
      <h2 className="mentors-title">{t("cert")}</h2>
      <div className="mentors-container">
        <motion.div
          className="mentors-carousel"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => startAnimation(certificates.length * 7)}
        >
          {[...certificates, ...certificates].map((certificate, index) => (
            <div key={`${certificate.id}-${index}`} className="mentor-card">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="mentor-photo"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesCarousel;
