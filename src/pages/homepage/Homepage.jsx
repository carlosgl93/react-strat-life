import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Quests from "../Quests";
import Attributes from "../Attributes";
import Lore from "../Lore";
import AuthContext from "../../store/auth_context";
import Login from "../Login";

const Homepage = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  if (authCtx.isLoggedIn !== true) {
    return <Login />;
  } else
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
