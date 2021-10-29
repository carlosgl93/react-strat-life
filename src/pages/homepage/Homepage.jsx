import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Quests from "../Quests";
import Attributes from "../Attributes";
import Lore from "../Lore";

const Homepage = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} lg={12}>
            <Lore />
          </Col>
          <Col md={true}>
            <Attributes />
          </Col>
          <Col md={true}>
            <Quests />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
