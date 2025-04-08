import React, { useRef, useEffect, useState } from "react";

const Slider = ({ direction = "left" }) => {
  const slideshowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Array of image paths
  const images = [
    '/media/insuranceLogos/axa.svg',
    '/media/insuranceLogos/axon.svg',
    '/media/insuranceLogos/banque Misr.svg',
    '/media/insuranceLogos/el araby.svg',
    '/media/insuranceLogos/future healthcare.svg',
    '/media/insuranceLogos/globemed.svg',
    '/media/insuranceLogos/Gymed.svg',
    '/media/insuranceLogos/limitless care.svg',
    '/media/insuranceLogos/logo (1).png',
    '/media/insuranceLogos/logo.png',
    '/media/insuranceLogos/M.svg',
    '/media/insuranceLogos/med right.svg',
    '/media/insuranceLogos/med solution.svg',
    '/media/insuranceLogos/medmark.svg',
    '/media/insuranceLogos/mednet.svg',
    '/media/insuranceLogos/medsure.svg',
    '/media/insuranceLogos/Misr.svg',
    '/media/insuranceLogos/next care.svg',
    '/media/insuranceLogos/one care.svg',
    '/media/insuranceLogos/osman group.svg',
    '/media/insuranceLogos/reliance health.svg',
    '/media/insuranceLogos/sehaone.svg',
    '/media/insuranceLogos/wadi el neel.svg',
    '/media/insuranceLogos/we.png',
  ];

  // Duplicated array to create seamless looping
  const imagesToDisplay = [...images, ...images];

  useEffect(() => {
    let animationId;

    const startAnimation = () => {
      const slideshow = slideshowRef.current;
      if (!slideshow) return;
      const scrollAmount = direction === "left" ? 1 : -1;

      slideshow.scrollLeft += scrollAmount;

      // Check if the scroll reached the end of the first set
      if (
        direction === "left" &&
        slideshow.scrollLeft >= slideshow.scrollWidth / 2
      ) {
        slideshow.scrollLeft = 0; // Reset to start
      } else if (
        direction === "right" &&
        slideshow.scrollLeft <= 0
      ) {
        slideshow.scrollLeft = slideshow.scrollWidth / 2; // Reset to second set
      }

      animationId = requestAnimationFrame(startAnimation);
    };

    if (!isHovered) {
      animationId = requestAnimationFrame(startAnimation);
    }

    return () => cancelAnimationFrame(animationId); // Cleanup on unmount
  }, [isHovered, direction]);

  return (
    <div
      className="slideshow-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={slideshowRef}
    >
      <div className="slideshow-track">
        {imagesToDisplay.map((image, index) => (
          <div className="imgSliderContainer">
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;