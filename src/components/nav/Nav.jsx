import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import classes from "./Nav.module.css";
import logo from "../../assets/logo.jpg";

const MyNav = () => {
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
          <Link to="/">
            <Image src={logo} roundedCircle style={{ height: "50px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/life-lore">Life Lore</Nav.Link>
            <Nav.Link to="/attributes">Attributes</Nav.Link>
            <Nav.Link to="/skill-tree">Skill Tree</Nav.Link>
            <Nav.Link to="/quests">Quests</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
