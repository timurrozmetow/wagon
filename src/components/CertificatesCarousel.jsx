import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './CertificatesCarousel.css';

const CertificatesCarousel = () => {
  const certificates = [
    { id: 1, image: 'cert/c1.jpg', title: 'Certificate 1' },
    { id: 2, image: 'cert/c2.jpg', title: 'Certificate 2' },
    { id: 3, image: 'cert/c3.jpg', title: 'Certificate 3' },
  ];

  const [mentors, setMentors] = useState(certificates); // Используем локальный массив вместо fetch

  const controls = useAnimation();

  useEffect(() => {
    if (mentors.length > 0) {
      controls.start({
        x: [0, -100 * mentors.length],
        transition: {
          duration: mentors.length * 3, // Регулируем скорость
          repeat: Infinity,
          ease: 'linear',
        },
      });
    }
  }, [mentors, controls]);

  return (
    <div className="mentors-section">
      <h2 className="mentors-title">мдлвамьвам</h2>
      <div className="mentors-container">
        <motion.div
          className="mentors-carousel"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: [0, -100 * mentors.length],
              transition: {
                duration: mentors.length * 5,
                repeat: Infinity,
                ease: 'linear',
              },
            })
          }
        >
          {[...mentors, ...mentors].map((mentor, index) => (
            <div
              key={`${mentor.id}-${index}`}
              className="mentor-card"
            >
              <img
                src={mentor.image} // Используем изображение из массива
                alt={mentor.title} // Используем заголовок для alt
                className="mentor-photo"
              />
              <div className="mentor-info">
                <h3 className="mentor-name">
                  {mentor.title}
                </h3>
                
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesCarousel;
