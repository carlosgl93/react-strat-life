import React from "react";
import Container from "react-bootstrap/Container";
const QuestItem = (props) => {
  return (
    <div>
      <React.Fragment key={props.quest.id}>
        <Container>
          <li key={props.quest.id}>
            {props.quest.task} priority:{props.quest.priority}
            <div className="quest_rewards">
              {props.quest.rewards.map((reward) => {
                return <p className="mb-0">{reward}: + 1</p>;
              })}
            </div>
          </li>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default QuestItem;
