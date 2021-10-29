import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { MdDeleteForever } from "react-icons/md";

const SelectedReward = (props) => {
  return (
    <React.Fragment>
      <ListGroup.Item as="li" key={props.attrKey} className="mx-4">
        {props.reward}
        <MdDeleteForever
          style={{ marginLeft: "5%", marginBottom: "0.66%" }}
          onClick={props.deleteReward}
          variant="light"
        />
      </ListGroup.Item>
    </React.Fragment>
  );
};

export default SelectedReward;
