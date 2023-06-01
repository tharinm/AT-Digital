import React from "react";

import heroImage from "../../../assets/images/header.png";
import "./HeroSection.css";

import HeroCard from "../../../components/HeaderSection/Herocard/HeroCard";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-card-wrapper ">
          <HeroCard className="hero-card" />
        </div>
      </div>
    </div>
  );
}
