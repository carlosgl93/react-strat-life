import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import reactDom from "react-dom";

const dummy_quests = [
  {
    id: "q1",
    title: "Slay the dragon",
    priority: "1",
    rewards: {
      emotional: 1,
      financial: 0,
      social: 0,
      spiritual: 1,
      occupational: 0,
      physical: 0,
      intellectual: 0,
    },
  },
  {
    id: "q2",
    title: "Tilt the existence towards heaven rather than hell",
    priority: "1",
    rewards: {
      emotional: 1,
      financial: 0,
      social: 1,
      spiritual: 1,
      occupational: 0,
      physical: 0,
      intellectual: 0,
    },
  },
  {
    id: "q3",
    title: "Plan tomorrow to be a meaningful, guilt-free day",
    priority: "2",
    rewards: {
      emotional: 0,
      financial: 0,
      social: 0,
      spiritual: 0,
      occupational: 1,
      physical: 0,
      intellectual: 1,
    },
  },
];

const Quests = () => {
  const [questTitle, setQuestTitle] = useState("");
  const [questPriority, setQuestPriority] = useState(1);
  const [questRewards, setQuestRewards] = useState([]);

  function handleQuestTitle(e) {
    let questTitle = reactDom.findDOMNode("questTitle");
    console.log(questTitle);
    setQuestTitle(questTitle);
  }

  return (
    <Container fluid>
      <div className="top text-center">
        <h2>Quest Tracker</h2>
        <p className="description">
          Create quests, add objectives and rewards this will unlock attributes
          points
        </p>
      </div>
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
      <div className="quests">
        <ul>
          {dummy_quests.map((quest) => {
            return (
              <React.Fragment key={quest.id}>
                <li key={quest.title}>
                  {quest.title} priority:{quest.priority}
                </li>
                <p>Todo: add rewards</p>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Quests;
