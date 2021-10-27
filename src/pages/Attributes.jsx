import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import attributesImage from "../assets/attributes.png";

const Attributes = () => {
  return (
    <Container>
      <h2 className="text-center">Attributes</h2>
      <p>
        Life is composed of attributes, our actions ripe and mature into fruits
        that give us traits . These traits are the attributes that constitute
        ourselves.
      </p>
      <Image src={attributesImage} rounded style={{ width: "80vw" }} />
    </Container>
  );
};

export default Attributes;
