'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[]; // Define that 'images' is an array of strings
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* Image Display */}
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
          >
            {index === currentIndex && (
              <Image src={image} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
            )}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }
        .carousel-images {
          display: flex;
          position: relative;
        }
        .carousel-image {
          min-width: 70%;
          height: 600px;
          transition: opacity 1s ease-in-out;
        }
        .inactive {
          opacity: 0;
        }
        .active {
          opacity: 1;
        }
        .dots {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 10px;
          height: 10px;
          background-color: lightgray;
          border-radius: 50%;
          cursor: pointer;
        }
        .active-dot {
          background-color: gray;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
