import React from "react";
import "./CertificatesCarousel.css";
import { useTranslation } from "react-i18next";

const CertificatesCarousel = () => {
  const { t } = useTranslation();

  const certificates = [
    { id: 1, image: "cert/c1.webp", title: t("certificate1") },
    { id: 2, image: "cert/c2.webp", title: t("certificate2") },
    { id: 3, image: "cert/c3.webp", title: t("certificate3") }
  ];

  return (
    <div className="certificates-section">
      <h2 className="certificates-title">{t("Certificates")}</h2>
      <div className="certificates-list">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-photo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesCarousel;
