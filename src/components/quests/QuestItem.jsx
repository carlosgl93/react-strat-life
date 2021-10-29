import React from "react";

const QuestItem = (props) => {
  return (
    <div>
      <React.Fragment key={props.quest.id}>
        <li key={props.quest.title}>
          {props.quest.title} priority:{props.quest.priority}
          <div className="quest_rewards">
            {props.quest.rewards.map((reward) => {
              <p>{reward}</p>;
            })}
          </div>
        </li>
        <p>Todo: add rewards</p>
      </React.Fragment>
    </div>
  );
};

export default QuestItem;
