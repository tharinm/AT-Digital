import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo/logo.svg";

export default function NavbarMain() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#6b3cc9" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt=""
            style={{ width: "238.89px", height: "36.11px",padding:'2px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav
            style={{
              fontFamily: "Inter",
              fontStyle: "sans-serif",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
            }}
          >
            <Nav.Link style={{ color: "#ffffff" }} href="#service">
              SERVICES
            </Nav.Link>
            <Nav.Link style={{ color: "#ffffff" }} href="#about">
              ABOUT US
            </Nav.Link>
            <Nav.Link style={{ color: "#ffffff" }} href="#contact">
              CONTACT US
            </Nav.Link>
            <Nav.Link style={{ color: "#ffffff" }} href="#acrees">
              CAREERS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
