import React from "react";
import { Container, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/Logo/logo.svg";
import "./Footer.css";

export default function Footer() {
  const techStack = [
    {
      id: 1,
      name: "ReactJS",
    },
    {
      id: 2,
      name: "Gatsby",
    },
    {
      id: 3,
      name: "Gatsby",
    },
    {
      id: 4,
      name: "NextJS",
    },
    {
      id: 5,
      name: "NodeJS",
    },
    {
      id: 6,
      name: "GraphyQL",
    },
    {
      id: 7,
      name: "Laravel",
    },
  ];

  const services = [
    { id: 1, service: "Social Media Marketing" },
    { id: 2, service: "Web & Mobile App Development" },
    { id: 3, service: "Data & Analytics" },
    { id: 4, service: "Google Marketing Solution" },
    { id: 5, service: "Search Engine Optimization" },
  ];
  return (
    <div
      style={{ backgroundColor: "#6B3CC9", padding: "20px" }}
      className="footer-container"
    >
      <Container className="mt-3">
        <Row>
          <Col xs={12} sm={12} md={6} className="mb-4  ">
            <Stack className="gap-3 overflow-hidden">
              <div>
                <img
                  src={logo}
                  alt=""
                  style={{ width: "238px", height: "36.11px" }}
                />
              </div>
              <Row style={{}} xs={8} sm={9} md={9}>
                <p
                  style={{
                    color: "white",
                    fontFamily: "lato",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19px",
                    fontStyle: "normal",
                    marginTop: "20px",
                  }}
                >
                  Your goal is our target. Not anything in between. We use
                  {/* <br></br> */}
                  online marketing platforms and tools to achieve single
                  {/* <br></br> */}
                  objective - your business results.
                </p>
              </Row>
            </Stack>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4 ">
            <div>
              <p
                style={{
                  fontSize: "21px",
                  fontStyle: "inter",
                  fontWeight: "600",
                  color: "white",
                  lineHeight: "25px",
                }}
              >
                Our Technologies
              </p>
              <div>
                {techStack.map((val, key) => {
                  return (
                    <div
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "white",
                        margin: "0 0 012px",
                        fontStyle: "normal",
                      }}
                      key={val.id}
                    >
                      {val.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="overflow-hidden ">
            <p
              style={{
                fontSize: "21px",
                fontStyle: "inter",
                fontWeight: "600",
                color: "white",
              }}
            >
              Our Technologies
            </p>
            <div>
              {services.map((val, key) => {
                return (
                  <div
                    style={{
                      fontFamily: "inter",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "white",
                      margin: "0 0 012px",
                      fontStyle: "normal",
                    }}
                    key={val.id}
                  >
                    {val.service}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row style={{}} className="d-flex justify-content-center mt-5">
          <hr style={{ color: "white", width: "630px" }} />
          <p
            style={{
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: "500",
              color: "white",
              lineHeight: "17px",
            }}
          >
            Privacy Policy | Terms & Conditions
          </p>
        </Row>
      </Container>
    </div>
  );
}
