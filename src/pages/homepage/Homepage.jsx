import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./Homepage.module.css";
import Quests from "../Quests";
import Attributes from "../Attributes";
import Lore from "../Lore";

const Homepage = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={true}>
            <Quests />
          </Col>
          <Col md={true}>
            <Attributes />
          </Col>
          <Col md={true}>
            <Lore />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
