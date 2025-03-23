import React from "react";
import "../styles/verticalScroll.css";
import image1 from '../assets/images/corouselImages/image1.png';

const VerticalScroll = () => {
  const images = [
    image1,
    image1,
    image1,
  ];

  return (
    <div className="vertical-scroll-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Carousel ${index}`} className="carousel-image" />
      ))}
    </div>
  );
};

export default VerticalScroll;