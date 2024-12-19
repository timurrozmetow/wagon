import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './CertificatesCarousel.css';

const CertificatesCarousel = () => {
  const certificates = [
    { id: 1, image: 'cert/c1.jpg', title: 'Certificate 1' },
    { id: 2, image: 'cert/c2.jpg', title: 'Certificate 2' },
    { id: 3, image: 'cert/c3.jpg', title: 'Certificate 3' },
  ];

  const controls = useAnimation();

  useEffect(() => {
    const totalWidth = certificates.length * 300; // 300px - ширина одной карточки
    controls.start({
      x: [0, -totalWidth],
      transition: {
        duration: certificates.length * 7, // Регулировка скорости
        repeat: Infinity,
        ease: 'linear',
      },
    });
  }, [certificates, controls]);

  return (
    <div className="mentors-section">
      <h2 className="mentors-title">Our Certificates</h2>
      <div className="mentors-container">
        <motion.div
          className="mentors-carousel"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: [0, -(certificates.length * 300)],
              transition: {
                duration: certificates.length * 4,
                repeat: Infinity,
                ease: 'linear',
              },
            })
          }
        >
          {[...certificates, ...certificates].map((certificate, index) => (
            <div
              key={`${certificate.id}-${index}`}
              className="mentor-card"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="mentor-photo"
              />
              {/* <div className="mentor-info">
                <h3 className="mentor-name">{certificate.title}</h3>
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesCarousel;
