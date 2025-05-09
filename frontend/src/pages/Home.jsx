import React, { useState } from "react";
import NavBar from "../controller/navbar/NavBar";
import SideBar from "../controller/sideBar/SideBar";
import VenueCard from "../controller/middle/vanueCard/VanueCard";
import venueData from "../data/vanueData.js";
import "./Home.css";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="header">
          <h1>Wedding Venues and Halls in Delhi</h1>

          <div className="filter-btn">
            <button onClick={toggleSidebar}>Filters</button>
          </div>

          {/* Slide-in Sidebar */}
          <div className={`mobile-sidebar-overlay ${showSidebar ? "visible" : ""}`}>
            <div className="mobile-sidebar">
              <button className="close-btn" onClick={toggleSidebar}>✕</button>
              <SideBar />
            </div>
          </div>

          <div className="main-content">
            <div className="side-bar">
              <SideBar />
            </div>

            <div className="cards">
              {venueData.map((venue) => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
