import React from "react";
import {
  localityOptions,
  venueTypeOptions,
  facilites,
  mealPreferences,
} from "../../data/sideBarData.js";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="filter-heading">Filters</h2>
      <div className="filter-section">
        <div className="filter-title">
          <span>Locality (0)</span>
          <button className="clear-btn">Clear</button>
        </div>
        <input
          type="text"
          placeholder="Search Locality"
          className="search-input"
        />
        <div className="checkbox-list">
          {localityOptions.map((item, index) => (
            <label key={index} className="checkbox-item">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
        <button className="show-more-btn">Show More</button>
      </div>

      {/* Venue Type Section */}
      <div className="filter-section">
        <div className="filter-title">
          <span>Venue Type (0)</span>
          <button className="clear-btn">Clear</button>
        </div>
        <div className="checkbox-list">
          {venueTypeOptions.map((item, index) => (
            <label key={index} className="checkbox-item">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
        <button className="show-more-btn">Show More</button>
      </div>

      {/* facilites Type Section */}
      <div className="filter-section">
        <div className="filter-title">
          <span>facilites (0)</span>
          <button className="clear-btn">Clear</button>
        </div>
        <div className="checkbox-list">
          {facilites.map((item, index) => (
            <label key={index} className="checkbox-item">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
        <button className="show-more-btn">Show More</button>
      </div>

      {/* Meal Preferences Type Section */}
      <div className="filter-section">
        <div className="filter-title">
          <span>facilites (0)</span>
          <button className="clear-btn">Clear</button>
        </div>
        <div className="checkbox-list">
          {mealPreferences.map((item, index) => (
            <label key={index} className="checkbox-item">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
        <button className="show-more-btn">Show More</button>
      </div>
      {/* Apply Filters Button (Mobile Only) */}
<div className="mobile-apply-btn-wrapper">
  <button className="apply-btn">Apply Filters</button>
</div>

    </div>
  );
};

export default SideBar;
