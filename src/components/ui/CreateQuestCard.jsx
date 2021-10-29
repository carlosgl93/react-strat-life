import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import QuestReward from "../quests/QuestReward";

const CreateQuestCard = (props) => {
  const [questTitle, setQuestTitle] = useState("");
  const [questPriority, setQuestPriority] = useState("");
  // toggle dropdown to select quest reward state
  const [addRewardVisible, setAddRewardVisibile] = useState(false);
  // rewards selected for this quest
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const handleQuestPriority = (event) => {
    setQuestPriority(event.target.value);
    console.log(questPriority);
  };

  // function to handle the visibility of rewards dropdown
  const handleAddRewardVisibility = (event) => {
    setAddRewardVisibile(!addRewardVisible);
    console.log(addRewardVisible);
  };

  const handleRewardSelect = (event) => {
    if (selectedAttributes.indexOf(event) === -1) {
      setSelectedAttributes([...selectedAttributes, event]);
      return;
    } else console.log(selectedAttributes);
  };

  // func to remove the selected reward:
  const handleDeleteReward = (event) => {
    console.log(event);
  };

  // form submition function
  const questTitleRef = useRef();
  const questPriorityRef = useRef();
  const questRewardRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredQuestTitle = questTitleRef.current.value;
    const enteredQuestPriority = questPriority;
    const enteredQuestRewards = selectedAttributes;
    const questData = {
      task: enteredQuestTitle,
      priority: enteredQuestPriority,
      rewards: enteredQuestRewards,
      done: false,
    };
    props.onNewQuest(questData);
  };

  return (
    <div className="create">
      <Card xs={12} sm={12}>
        <Row sm={12} xs={12}>
          <Col className="text-center">
            <h3 className="text-center mt-2">Create a quest</h3>
            <Container fluid id="form-container" className="px-1">
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Quest main task</label> <br />
                <input
                  type="text"
                  required
                  id="title"
                  style={{ width: "85%" }}
                  ref={questTitleRef}
                ></input>{" "}
                <br />
                <label htmlFor="priority">Quest Priority</label> <br />
                <Form.Text id="priority_help_text" muted>
                  1 is the most important, 4 is the least important
                </Form.Text>
                <br />
                <div
                  className="quest_priotity_radio"
                  onChange={handleQuestPriority}
                >
                  <input
                    type="radio"
                    id="priority1"
                    value="1"
                    name="quest_priority"
                    style={{ margin: "1vh 1vw" }}
                    ref={questPriorityRef}
                    required
                  />
                  <label htmlFor="priority1">1</label>
                  <input
                    type="radio"
                    id="priority2"
                    value="2"
                    name="quest_priority"
                    style={{ margin: "1vh 1vw" }}
                  />
                  <label htmlFor="priority2">2</label>
                  <input
                    type="radio"
                    id="priority3"
                    value="3"
                    name="quest_priority"
                    style={{ margin: "1vh 1vw" }}
                  />
                  <label htmlFor="priority3">3</label>
                  <input
                    type="radio"
                    id="priority4"
                    value="4"
                    name="quest_priority"
                    style={{ margin: "1vh 1vw" }}
                  />
                  <label htmlFor="priority4">4</label>
                </div>
                <Container fluid className="rewards px-0 my-3">
                  <QuestReward
                    rewardKey={selectedAttributes.length}
                    onClick={handleAddRewardVisibility}
                    addRewardVisible={addRewardVisible}
                    addRewards={handleRewardSelect}
                    rewards={selectedAttributes}
                    deleteReward={handleDeleteReward}
                    rewardRef={questRewardRef}
                  />
                  <Button className="mt-3" type="submit">
                    Create Quest
                  </Button>
                </Container>
              </form>
            </Container>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CreateQuestCard;
