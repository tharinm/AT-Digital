import React from "react";
import Row from "react-bootstrap/Row";

import heroImage from "../../../assets/images/header.png";

import "./HeroStyle.css";

import HeroCard from "../../../components/HeaderSection/Herocard/HeroCard";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="background">
        <img src={heroImage} alt="" style={{ width: "100%" }} />
      </div>
      <Row className="hero-cardm " style={{}}>
        <HeroCard />
      </Row>
    </div>
  );
}
