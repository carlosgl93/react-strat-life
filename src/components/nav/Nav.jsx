import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";

import classes from "./Nav.module.css";
import logo from "../../assets/logo.jpg";
import AuthContext from "../../store/auth_context";

const MyNav = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    authCtx.logout();
    history.replace("/login");
  };

  if (authCtx.isLoggedIn) {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        stiky="top"
        className={classes.header}
      >
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>
                <Image src={logo} roundedCircle style={{ height: "50px" }} />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/life-lore">
                <Nav.Link>Life Lore</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/attributes">
                <Nav.Link>Attributes</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/skill">
                <Nav.Link>Skill Tree</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/quests">
                <Nav.Link>Quests</Nav.Link>
              </LinkContainer>

              {authCtx.isLoggedIn && (
                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        stiky="top"
        className={classes.header}
      >
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/login">
              <Nav.Link>
                <Image src={logo} roundedCircle style={{ height: "50px" }} />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/sign-up">
                <Nav.Link>Create an account</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default MyNav;
