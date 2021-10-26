import React, { useState } from "react";
import reactDom from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const CreateQuestCard = () => {
  const [questTitle, setQuestTitle] = useState("");
  const [questPriority, setQuestPriority] = useState(1);
  const [questRewards, setQuestRewards] = useState([]);

  function handleQuestTitle(e) {
    let questTitle = reactDom.findDOMNode("questTitle");
    console.log(questTitle);
    setQuestTitle(questTitle);
  }
  return (
    <div className="create">
      <Card>
        <Card.Header as="h5">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Quest Title"
              aria-label="qTitle"
              aria-describedby="qTitle"
              ref={setQuestTitle}
            />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Priority
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.ItemText>
                  1 = Do now / 4 = Can be avoided
                </Dropdown.ItemText>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
                <Dropdown.Item>4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Add rewards:
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Pillars affected
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Emotional</Dropdown.Item>
                <Dropdown.Item>Financial</Dropdown.Item>
                <Dropdown.Item>Social</Dropdown.Item>
                <Dropdown.Item>Spiritual</Dropdown.Item>
                <Dropdown.Item>Occupational</Dropdown.Item>
                <Dropdown.Item>Physical</Dropdown.Item>
                <Dropdown.Item>Intellectual</Dropdown.Item>
                <Dropdown.Item>Environmental</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <ul></ul>
          </Card.Text>
          <Button variant="primary" onClick={handleQuestTitle}>
            Create Quest
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateQuestCard;
