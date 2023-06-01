import React from "react";
import Stack from "react-bootstrap/esm/Stack";
import HeaderButton from "../HeaderButton";
import { Container } from "react-bootstrap";
import "./HeroCard.css";

export default function HeroCard() {
  return (
    // <Container>
    <Stack
      className="hero-card xs={12} "
      style={{
        background:
          "linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%), #FFFFFF",
        marginBottom:'40px'
      }}
      
    >
      <div>
        <h1 className="hero-card-title" >
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
      </div>
      <div className="hero-card-button">
        <HeaderButton />
      </div>
    </Stack>
    // </Container>
  );
}
