import React from "react";
import QuestItem from "./QuestItem";

const QuestList = (props) => {
  return (
    <ul>
      {props.quests.map((quest) => {
        return <QuestItem key={quest.id} quest={quest} />;
      })}
    </ul>
  );
};

export default QuestList;
