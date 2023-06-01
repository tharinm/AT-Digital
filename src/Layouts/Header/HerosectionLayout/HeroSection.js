import React from "react";
import Row from "react-bootstrap/Row";
import heroImage from "../../../assets/images/header.png";
import blur from '../../../assets/images/blur.png'
import "./HeroStyle.css";
import HeroCard from "../../../components/HeaderSection/Herocard/HeroCard";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="background">
        <LazyLoadImage
          effect="blur"
          img
          src={heroImage}
          alt=""
          style={{ width: "100%" }}
          placeholderSrc={blur}
        />
      </div>
      <Row className="hero-cardm " style={{}}>
        <HeroCard />
      </Row>
    </div>
  );
}
