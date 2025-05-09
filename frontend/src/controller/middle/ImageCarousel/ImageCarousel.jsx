import React, { useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="carousel-container">
      <img src={images[selected]} alt="venue" className="main-image" />
      <div className="thumb-row">
        {images.slice(0, 3).map((img, i) => (
          <img
            key={i}
            src={img}
            className={`thumb ${selected === i ? "active" : ""}`}
            onClick={() => setSelected(i)}
            alt="thumb"
          />
        ))}
        {images.length > 3 && <div className="view-all">View All</div>}
      </div>
    </div>
  );
};

export default ImageCarousel;
