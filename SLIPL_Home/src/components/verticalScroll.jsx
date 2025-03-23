import React from "react";
import "../styles/verticalScroll.css";
import image1 from "../assets/images/verticalCorouselimages/thumbnail_1.jpg";
import image2 from "../assets/images/verticalCorouselimages/thumbnail_2.png";
import image3 from "../assets/images/verticalCorouselimages/thumbnail_3.jpg";

const VerticalScroll = () => {
  const images = [
    image1,
    image2,
    image3,
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