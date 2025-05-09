import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./VenueCard.css";

const VenueCard = ({ venue }) => {
  return (
    <div className="venue-card">
      <div className="card-img">
        <ImageCarousel images={venue.images} />
      </div>

      <div className="card-content">
        <div className="card-header">
          <h2>{venue.name}</h2>
          <div className="rating">{venue.rating}/5</div>
        </div>
        <div className="card-detail">
          <p className="location">{venue.location}</p>
          <p className="desc">{venue.description}</p>
        </div>

        <div className="tags">
          {venue.categories.map((cat, i) => (
            <span key={i} className="tag">
              {cat}
            </span>
          ))}
        </div>

        <div className="price-detail">
          <div className="price-row">
            <span>
              <p>Non Vegetarian</p> <strong>₹{venue.price.nonVeg}</strong>/Plate
            </span>
            <span>
              <p>Vegetarian</p> <strong>₹{venue.price.veg}</strong>/Plate
            </span>
          </div>
          <div className="see-prices">
            <button>See Prices</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
