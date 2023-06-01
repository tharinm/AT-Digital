import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import heroImage from "../../../assets/images/header.png";
// import "./HeroSection.css";
import "./Herotest.css";

import HeroCard from "../../../components/HeaderSection/Herocard/HeroCard";

export default function HeroSection() {
  return (
    <div className="hero-section">
      {/* <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}> */}
      {/* <div className="hero-card-wrapper "> */}
      {/* <HeroCard className="hero-card" /> */}
      {/* </div> */}
      {/* </div> */}
      <div className="background">
        <img src={heroImage} alt="" style={{ width: "100%" }} />
      </div>
      <Row className="hero-cardm" style={{}}>
        <HeroCard />
      </Row>
    </div>
  );
}
