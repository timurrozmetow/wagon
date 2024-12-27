import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="swiper-container"
          >
            <SwiperSlide>
              <img src="/banner/1.webp" alt="Фото 1" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner/3.webp" alt="Фото 3" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner/4.webp" alt="Фото 4" className="carousel-image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Zawod;
