import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./ContentCompo.css";
import ContentButton from "../common/ContentButton";

export default function Content({ img, title, desc, id, btn_text }) {
  const reverse = id % 2 === 0;

  return (
    <Container style={{marginTop:'80px'}} >
      <Row
        style={{ padding: "5px" }}
        className={`align-items-center text-center ${
          reverse ? "justify-content-center-reverse" : "justify-content-center"
        } `}
      >
        <Col xs={12} md={4} className={reverse ? "order-md-2" : ""}>
          <img className={img} src={img} alt="" style={{}} />
        </Col>
        <Col xs={12} md={8} className="text-md-start text-center">
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "27px",
              color: "#6B3CC9",
              lineHeight: "33px",
              fontWeight: "600",
            }}
            className="title"
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "inter",
              fontWeight: "400",
              lineHeight: "19.36px",
              marginTop:'-2px'
            }}
          
          >
            {desc}
          </p>
          <ContentButton btn_text={btn_text}  />
        </Col>
      </Row>
    </Container>
  );
}
