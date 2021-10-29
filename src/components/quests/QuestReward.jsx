import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import SelectedReward from "./SelectedReward";

const QuestReward = (props) => {
  return (
    <div>
      <label className="text-center">Add rewards:</label> <br />
      <Button onClick={props.onClick} variant="light">
        <GrAddCircle />
      </Button>
      {props.addRewardVisible && (
        <DropdownButton
          className="mt-1 mb-3"
          id="dropdown-basic-button"
          title="Select an attribute"
          onSelect={props.addRewards}
        >
          <Dropdown.Item eventKey="Emotional">Emotional</Dropdown.Item>
          <Dropdown.Item eventKey="Financial">Financial</Dropdown.Item>
          <Dropdown.Item eventKey="Social">Social</Dropdown.Item>
          <Dropdown.Item eventKey="Spiritual">Spiritual</Dropdown.Item>
          <Dropdown.Item eventKey="Occupational">Occupational</Dropdown.Item>
          <Dropdown.Item eventKey="Physical">Physical</Dropdown.Item>
          <Dropdown.Item eventKey="Intellectual">Intellectual</Dropdown.Item>
          <Dropdown.Item eventKey="Environmental">Environmental</Dropdown.Item>
        </DropdownButton>
      )}
      <ListGroup as="ol" numbered>
        {props.rewards.length > 0 &&
          props.rewards.map((attr, index) => {
            return (
              <SelectedReward
                id={index}
                key={index}
                reward={attr}
                attrKey={props.rewardKey}
                deleteReward={props.deleteReward}
              />
            );
          })}
      </ListGroup>
    </div>
  );
};

export default QuestReward;
