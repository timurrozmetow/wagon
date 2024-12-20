import React from "react";
import Slider from "react-slick";
import "./CertificatesCarousel.css";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificatesCarousel = () => {
  const { t } = useTranslation();

  const certificates = [
    { id: 1, image: "cert/c1.webp", title: t("certificate1") },
    { id: 2, image: "cert/c2.webp", title: t("certificate2") },
    { id: 3, image: "cert/c3.webp", title: t("certificate3") }
  ];

  const settings = {
    dots: true, // Навигационные точки
    infinite: true, // Зацикливание
    speed: 500, // Скорость анимации
    slidesToShow: 4, // Количество карточек на больших экранах
    slidesToScroll: 1, // Перелистывание на 1 карточку
    responsive: [
      {
        breakpoint: 1024, // Планшеты
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Телефоны
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Очень маленькие экраны
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="certificates-section">
      <h2 className="certificates-title">{t("Certificates")}</h2>
      <Slider {...settings} className="certificates-slider">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-photo"
            />
            {/* <h3 className="certificate-title">{certificate.title}</h3> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificatesCarousel;
