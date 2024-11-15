import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles.css';
import c1 from '/assets/c1.jpeg';
import c2 from '/assets/c2.jpeg';
import c3 from '/assets/c3.jpeg';
import c4 from '/assets/c4.jpeg';
import c5 from '/assets/c5.jpeg';
import c6 from '/assets/c6.jpeg';
import c7 from '/assets/c7.jpeg';

const images = [
    {src: c1, text: 'Music & Live Concerts'},
    {src: c2, text: 'Festival Celebrations'},
    {src: c3, text: 'Health and Wellness sessions'},
    {src: c4, text: 'Creative Workshops'},
    {src: c5, text: 'Open mic competitions'},
    {src: c6, text: 'Gaming & Entertainment'},
    {src: c7, text: 'Courses and a lot more'}
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative flex justify-center items-center mt-2">
      <div className="relative w-[80%] h-80 flex items-center justify-center overflow-hidden">
        {images.map((image, index) => {
          const isCenter = index === currentIndex;
          const leftIndex = (currentIndex - 2 + images.length) % images.length;
          const midLeftIndex = (currentIndex - 1 + images.length) % images.length;
          const farthestLeftIndex = (currentIndex - 3 + images.length) % images.length;
          const midRightIndex = (currentIndex + 1) % images.length;
          const rightIndex = (currentIndex + 2) % images.length;
          const farthestRightIndex = (currentIndex + 3) % images.length;

          const positionStyle = isCenter
            ? { zIndex: 10, scale: 1, opacity: 1, x: 0 }
            : index === midLeftIndex
            ? { zIndex: 6, scale: 0.8, opacity: 0.85, x: -200 }
            : index === leftIndex
            ? { zIndex: 4, scale: 0.6, opacity: 0.7, x: -350 }
            : index === farthestLeftIndex
            ? { zIndex: 2, scale: 0.5, opacity: 0.5, x: -450 }
            : index === midRightIndex
            ? { zIndex: 6, scale: 0.8, opacity: 0.85, x: 200 }
            : index === rightIndex
            ? { zIndex: 4, scale: 0.6, opacity: 0.7, x: 350 }
            : index === farthestRightIndex
            ? { zIndex: 2, scale: 0.5, opacity: 0.5, x: 450 }
            : { zIndex: 1, scale: 0.7, opacity: 0 };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={positionStyle}
              transition={{ duration: 0.6, type: 'spring' }}
              className={`absolute rounded-lg shadow-lg ${isCenter ? 'scale-110' : ''}`}
              style={{
                width: isCenter ? (isLargeScreen ? '60%' : '80%') : (isLargeScreen ? '50%' : '70%'),
                height: 'auto',
                transformOrigin: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={image.src}
                alt={`Carousel ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold text-center whitespace-pre-wrap">
                  {image.text}
                </h2>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      <button onClick={handlePrevious} className="absolute left-4 sm:left-6 lg:left-8 text-xl sm:text-2xl lg:text-3xl  text-gray-400">
        &#10094;
      </button>
      <button onClick={handleNext} className="absolute right-4 sm:right-6 lg:right-8 text-xl sm:text-2xl lg:text-3xl text-gray-400">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;