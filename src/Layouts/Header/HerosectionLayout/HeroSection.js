import React from "react";
import Row from "react-bootstrap/Row";
import heroImage from "../../../assets/images/header.png";
import "./HeroStyle.css";
import HeroCard from "../../../components/HeaderSection/Herocard/HeroCard";
import LazyLoad from "react-lazy-load";

export default function HeroSection() {
  return (
    <LazyLoad>
    <div className="hero-section">
      <div className="background">
        
        <img
          img
          src={heroImage}
          alt=""
          style={{ width: "100%" }}
          // placeholderSrc={blur}
        />
      </div>
      <Row className="hero-cardm " style={{}}>
        <HeroCard />
      </Row>
      </div>
      </LazyLoad>
  );
}
